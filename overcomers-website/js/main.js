(function () {
  const select = (selector, root = document) => root.querySelector(selector);
  const selectAll = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const showToast = (message) => {
    const toast = select('#toast');
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { toast.hidden = true; }, 3500);
  };

  const setYear = () => {
    const yearEl = select('#year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  };

  const setupNav = () => {
    const toggle = select('.nav-toggle');
    const menu = select('#nav-menu');
    if (!toggle || !menu) return;

    const setExpanded = (expanded) => {
      toggle.setAttribute('aria-expanded', String(expanded));
      menu.classList.toggle('show', expanded);
    };

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      setExpanded(!expanded);
    });

    selectAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => setExpanded(false));
    });
  };

  const setupSmoothScroll = () => {
    selectAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href.length < 2) return;
        const target = select(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', href);
      });
    });
  };

  const setupActiveNavOnScroll = () => {
    const sections = selectAll('main section[id]');
    const navLinks = new Map(selectAll('.nav-link').map((a) => [a.getAttribute('href'), a]));
    if (sections.length === 0 || navLinks.size === 0) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const href = `#${entry.target.id}`;
        const link = navLinks.get(href);
        if (!link) return;
        if (entry.isIntersecting) {
          selectAll('.nav-link').forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });
    sections.forEach((s) => observer.observe(s));
  };

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    const parts = [];
    if (digits.length > 0) parts.push('(' + digits.slice(0, Math.min(3, digits.length)) + ')');
    if (digits.length >= 4) parts.push(' ' + digits.slice(3, Math.min(6, digits.length)));
    if (digits.length >= 7) parts.push('-' + digits.slice(6));
    return parts.join('');
  };

  const serializeForm = (form) => {
    const data = {};
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
      if (data[key]) {
        data[key] = Array.isArray(data[key]) ? [...data[key], value] : [data[key], value];
      } else {
        data[key] = value;
      }
    }
    const multiSelects = selectAll('select[multiple]', form);
    multiSelects.forEach((sel) => {
      const selectedValues = Array.from(sel.selectedOptions).map((o) => o.value);
      data[sel.name] = selectedValues;
    });
    return data;
  };

  const setupRegistrationForm = () => {
    const form = select('#registration-form');
    const alertEl = select('#registrationAlert');
    const downloadBtn = select('#downloadRegistration');
    if (!form || !alertEl || !downloadBtn) return;

    const phoneInputs = [select('#guardianPhone'), select('#emergencyPhone')].filter(Boolean);
    phoneInputs.forEach((input) => {
      input.addEventListener('input', () => {
        const caret = input.selectionStart || 0;
        const before = input.value;
        input.value = formatPhoneNumber(input.value);
        const diff = input.value.length - before.length;
        input.setSelectionRange(Math.max(0, caret + diff), Math.max(0, caret + diff));
      });
    });

    const saveLocal = (payload) => {
      try {
        const key = 'oc_registrations';
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.push({ ...payload, submittedAt: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(existing));
      } catch {}
    };

    const downloadJSON = (payload) => {
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const childName = `${payload.playerFirstName || 'player'}_${payload.playerLastName || ''}`.trim();
      a.download = `overcomers_registration_${childName}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alertEl.hidden = true;

      if (!form.checkValidity()) {
        showToast('Please complete required fields.');
        form.reportValidity();
        return;
      }

      const data = serializeForm(form);
      saveLocal(data);

      alertEl.textContent = 'Registration submitted! A local copy has been saved in your browser.';
      alertEl.hidden = false;
      showToast('Registration submitted successfully.');
      form.reset();
    });

    downloadBtn.addEventListener('click', () => {
      const data = serializeForm(form);
      if (!data.playerFirstName || !data.playerLastName) {
        showToast('Add the player name first to include it in the filename.');
      }
      downloadJSON(data);
    });
  };

  const setupContactForm = () => {
    const form = select('#contact-form');
    const alertEl = select('#contactAlert');
    const mailtoFallback = select('#mailtoFallback');
    const toEmailAnchor = select('#contactEmail');
    if (!form || !alertEl) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alertEl.hidden = true;
      if (!form.checkValidity()) {
        showToast('Please complete the contact form.');
        form.reportValidity();
        return;
      }
      const name = select('#contactName').value.trim();
      const email = select('#contactEmailInput').value.trim();
      const message = select('#contactMessage').value.trim();

      const to = (toEmailAnchor && toEmailAnchor.getAttribute('href').replace('mailto:', '')) || 'overcomers@example.com';
      const subject = encodeURIComponent(`OverComers Inquiry — ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
      const mailtoUrl = `mailto:${to}?subject=${subject}&body=${body}`;

      if (mailtoFallback) {
        mailtoFallback.href = mailtoUrl;
      }

      window.location.href = mailtoUrl;
      alertEl.textContent = 'Thanks! Your email app should open. If not, use the "Open email app" button.';
      alertEl.hidden = false;
      showToast('Preparing email...');
      form.reset();
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    setYear();
    setupNav();
    setupSmoothScroll();
    setupActiveNavOnScroll();
    setupRegistrationForm();
    setupContactForm();
  });
})();

function isStrongPassword(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Check if the password contains the string "password"
    if (password.toLowerCase().includes("password")) {
        return false;
    }

    // Check if the password contains at least one uppercase character
    let hasUppercase = false;
    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            hasUppercase = true;
            break;
        }
    }

    return hasUppercase;
}
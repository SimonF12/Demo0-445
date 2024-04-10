document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    
    const cInput = document.getElementById("cInput");
    const fInput = document.getElementById("fInput");
    const convertButton = document.getElementById("convertButton");
    const errorMessage = document.getElementById("errorMessage");
    const weatherImage = document.getElementById("weatherImage");

    
    cInput.addEventListener("input", clearOpposingField);
    fInput.addEventListener("input", clearOpposingField);

    
    convertButton.addEventListener("click", handleConvert);

    
    function clearOpposingField(event) {
        if (event.target === cInput) {
            fInput.value = "";
        } else if (event.target === fInput) {
            cInput.value = "";
        }
    }

 
    function convertCtoF(degressCelsius) {
        return (degressCelsius * 9/5 + 32);
    }

    function convertFtoC(degressFahrenheit) {
        return ((degressFahrenheit - 32) * 5/9);
    }

    
    function handleConvert() {
        const cValue = parseFloat(cInput.value);
        const fValue = parseFloat(fInput.value);

        if (!isNaN(cValue)) {
            const convertedF = convertCtoF(cValue);
            fInput.value = convertedF;

            
            if (convertedF < 32) {
                weatherImage.src = "cold.png";
            } else if (convertedF >= 32 && convertedF <= 50) {
                weatherImage.src = "cool.png";
            } else {
                weatherImage.src = "warm.png";
            }
        } else if (!isNaN(fValue)) {
            const convertedC = convertFtoC(fValue);
            cInput.value = convertedC;

            
            if (fValue < 32) {
                weatherImage.src = "cold.png";
            } else if (fValue >= 32 && fValue <= 50) {
                weatherImage.src = "cool.png";
            } else {
                weatherImage.src = "warm.png";
            }
        } else {
            errorMessage.innerHTML = "is not a number.";
        }
    }
}
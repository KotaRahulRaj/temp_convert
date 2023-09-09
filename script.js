document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const resultOutput = document.getElementById("result");
    const convertButton = document.getElementById("convert");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;
        let convertedTemperature;

        if (!isNaN(temperature)) {
            switch (fromUnit) {
                case "celsius":
                    convertedTemperature = {
                        celsius: temperature,
                        fahrenheit: (temperature * 9/5) + 32,
                        kelvin: temperature + 273.15
                    };
                    break;
                case "fahrenheit":
                    convertedTemperature = {
                        celsius: (temperature - 32) * 5/9,
                        fahrenheit: temperature,
                        kelvin: (temperature - 32) * 5/9 + 273.15
                    };
                    break;
                case "kelvin":
                    convertedTemperature = {
                        celsius: temperature - 273.15,
                        fahrenheit: (temperature - 273.15) * 9/5 + 32,
                        kelvin: temperature
                    };
                    break;
                default:
                    break;
            }

            const resultText = `Converted temperature: ${convertedTemperature[toUnit].toFixed(2)}${toUnit === 'kelvin' ? 'K' : '°' + toUnit.charAt(0).toUpperCase()}`;
            resultOutput.textContent = resultText;
        } else {
            alert("Please enter a valid temperature.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("conversionForm");
    const tempInput = document.getElementById("tempinput");
    const ansInput = document.getElementById("ansinput");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting the traditional way.

        const tempValue = parseFloat(tempInput.value); // Parse the temperature input as a float.

        if (isNaN(tempValue)) {
            // Check if the input is a valid number.
            alert("Please enter a valid temperature.");
        } else {
            const tempScale = document.getElementById("temp").value;
            const ansScale = document.getElementById("ans").value;
            let convertedTemp;

            if (tempScale === ansScale) {
                convertedTemp = tempValue; // No conversion needed if the scales are the same.
            } else if (tempScale === "celsius" && ansScale === "fahrenheit") {
                convertedTemp = (tempValue * 9 / 5) + 32;
            } else if (tempScale === "celsius" && ansScale === "kelvin") {
                convertedTemp = tempValue + 273.15;
            } else if (tempScale === "fahrenheit" && ansScale === "celsius") {
                convertedTemp = (tempValue - 32) * 5 / 9;
            } else if (tempScale === "fahrenheit" && ansScale === "kelvin") {
                convertedTemp = ((tempValue - 32) * 5 / 9) + 273.15;
            } else if (tempScale === "kelvin" && ansScale === "celsius") {
                convertedTemp = tempValue - 273.15;
            } else if (tempScale === "kelvin" && ansScale === "fahrenheit") {
                convertedTemp = ((tempValue - 273.15) * 9 / 5) + 32;
            }

            ansInput.value = convertedTemp.toFixed(2); // Display the converted temperature with 2 decimal places.
        }
    });
});
   


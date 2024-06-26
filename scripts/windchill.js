const temp = document.getElementById("temp");
const wind = document.getElementById("wind");
const label = document.querySelector(".weather-label-windchill")

const tempValue = parseFloat(temp.textContent);
const windValue = parseFloat(wind.textContent);

function windChillCalculator(temp, wind) {
    if (temp >= 10 || wind > 4.8) {
        return temp;
    }

    const windChill = 35.74 + (0.6215 * tempValue) - (35.75 * Math.pow(windValue, 0.16)) + (0.4275 * tempValue * Math.pow(windValue, 0.16));
    return windChill.toFixed(2);
}

const windChill = windChillCalculator(tempValue, windValue)

label.innerHTML = `<strong>WindChill:</strong> <span>${windChill}°C</span>`


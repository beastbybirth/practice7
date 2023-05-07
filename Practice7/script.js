const tempDecBtn = document.getElementById('temp-dec-btn');
const tempIncBtn = document.getElementById('temp-inc-btn');
const temperatureDisplay = document.getElementById('temperature');

let temperature = 72; // default temperature

tempDecBtn.addEventListener('click', () => {
if (temperature > 60) { // minimum temperature
temperature--;
temperatureDisplay.textContent = temperature;
}
});

tempIncBtn.addEventListener('click', () => {
if (temperature < 90) { // maximum temperature
temperature++;
temperatureDisplay.textContent = temperature;
}
});
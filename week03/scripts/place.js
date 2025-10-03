document.getElementById('currentyear').innerHTML = new Date().getFullYear();
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.innerHTML = `Last modification: ${document.lastModified}`;
}

function calculateWindChill(temp, windSpeed) {
  // Wind chill formula for metric units (°C and km/h)
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

function displayWindChill() {
  // Static temperature and wind speed values
  let temp = 10; // in °C
  let windSpeed = 5; // in km/h

  // Check conditions for viable wind chill calculations
  if (temp <= 10 && windSpeed > 4.8) {
    let windChill = calculateWindChill(temp, windSpeed);
    windChill = windChill.toFixed(1); // Round to one decimal place
    document.querySelector('.weather-item:nth-child(4) .value').textContent = `${windChill}°C`;
  } else {
    document.querySelector('.weather-item:nth-child(4) .value').textContent = 'N/A';
  }
}

// Call the function to display wind chill when the page loads
document.addEventListener('DOMContentLoaded', displayWindChill);
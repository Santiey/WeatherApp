function refreshWeather(response) {
let tempElement = document.querySelector("#temp");
let temp = response.data.temperature.current;

tempElement.innerHTML = Math.round(temp);
cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
let apiKey = "93b1062870ba3t0o0f4309f684f9efc9";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    

    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

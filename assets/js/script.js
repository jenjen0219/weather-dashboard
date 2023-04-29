var APIKey = '7b91ed8314f4e3bf476bcd5d074d7fd6';
// create javascript variables which make reference to your html elements
var humidityEl = document.getElementById('humidityEl');
var weatherIcon = document.getElementById('weatherIcon');
var windEl = document.getElementById('windEl');
var weatherIconDescription = document.getElementById('weatherIconDescription');
var forecastCards = Array.from(document.getElementsByClassName('column box'));
console.log('forecastCards', forecastCards);
console.log('hey', forecastCards[0].childNodes);

// var queryURLForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;


// target form elements
var searchFormBtn = document.getElementById("searchCityEl")
var userInput = document.getElementById('cityName');

function handleUserInput(event) {
    console.log('submit');
    event.preventDefault()
    getLatAndLon(userInput.value)
    //getOneCallWeather(userInput.value)
}


function getLatAndLon(city) {
    var queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKey}`;

    fetch(queryURL).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);
        var lon = data[0].lon;
        var lat = data[0].lat;
        console.log(lat, lon);
        getOneCallWeather(lat, lon)
    })
}


function getOneCallWeather(lat, lon) {
    console.log('inside getonecallweather');

    var queryURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=[minutely,hourly,alerts]&appid=${APIKey}`;

    fetch(queryURL).then(function (response) {
        return response.json()
    }).then(function (data) {
        var iconCode = data.current.weather[0].icon;
        console.log(data);

        weatherIconDescription.textContent = `${data.current.weather[0].description.substring(0, 1).toUpperCase()}${data.current.weather[0].description.substring(1)}`;

        humidityEl.textContent = 'Humidity: ' + data.current.humidity;

        windEl.textContent = 'Wind Speed: ' + data.current.wind_speed;

        weatherIcon.src = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png';

        // more assignments of values to textContent properties...
        // ...
        // ...
        document.querySelector('#fiveDayForecast > section').classList.remove("hide");
        for (let i = 0; i < 5; i++) {
            //console.log(forecastCards[i].childNodes[1];
        }

    })
}



searchFormBtn.addEventListener('submit', handleUserInput)
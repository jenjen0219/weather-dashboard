var APIKey = '7b91ed8314f4e3bf476bcd5d074d7fd6';
// create javascript variables which make reference to your html elements
var cityNameTitle = document.getElementById('cityNameTitle');
var humidityEl = document.getElementById('humidityEl');
var weatherIcon = document.getElementById('weatherIcon');
var windEl = document.getElementById('windEl');
var weatherIconDescription = document.getElementById('weatherIconDescription');
var tempEl = document.getElementById('tempEl');
var forecastCardParent = document.getElementById('forecast-cards');
var userSearchHistory = JSON.parse(localStorage.getItem('history')) || [];

const fiveDayObject = [];
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
        getCallWeather(lat, lon);
        fiveDayForecast(lat, lon);
        cityHistory(data[0].name);
    })
}


function getCallWeather(lat, lon) {
    console.log('inside getonecallweather');

    var queryURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;

    fetch(queryURL).then(function (response) {
        return response.json()
    }).then(function (data) {
        //grabbing the icon code that we will use to present the icon itself in just a bit for the variable weatherIcon
        var iconCode = `${data.weather[0].icon}`;
        weatherIconDescription.textContent = `${data.weather[0].description.substring(0, 1).toUpperCase()}${data.weather[0].description.substring(1)}`;
        cityNameTitle.textContent = `${data.name}`;
        humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
        windEl.textContent = `Wind Speed: ${data.wind.speed} mph`;
        weatherIcon.src = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png';
        tempEl.textContent = `Temperature: ${data.main.temp} °F`

    })
}

function fiveDayForecast(lat, lon) {
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;
    fetch(queryURL).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);

        //this is going to create an object with all of the data we want
        for (let i = 7; i < data.list.length; i += 8) {

            fiveDayObject.push(data.list[i]);
        }
        console.log(fiveDayObject);

        //this loop is going to create 5 cards
        for (let i = 0; i < 5; i++) {

            // create the cards
            const card = document.createElement('section');
            const cardDate = document.createElement('div');
            const cardIcon = document.createElement('div');
            const cardDescription = document.createElement('div');
            const cardHumidity = document.createElement('div');
            const cardWind = document.createElement('div');
            const cardTemp = document.createElement('div');

            card.className = 'column box';
            cardDate.className = 'sub-title';
            cardIcon.className = 'sub-title';
            cardDescription.className = 'sub-title';
            cardHumidity.className = 'sub-title';
            cardWind.className = 'sub-title';
            cardTemp.className = 'sub-title';

            //this will grab the date and convert it into the format i want
            var dateString = new Date(Date.parse(fiveDayObject[i].dt_txt)).toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }).replace(/\//g, '-');
            var cardIconCode = fiveDayObject[i].weather[0].icon;

            cardDate.textContent = dateString;
            cardIcon.src = 'https://openweathermap.org/img/wn/' + cardIconCode + '@2x.png'
            cardDescription.textContent = `${fiveDayObject[i].weather[0].description.substring(0, 1).toUpperCase()}${fiveDayObject[i].weather[0].description.substring(1)}`;
            cardHumidity.textContent = `Humidity: ${fiveDayObject[i].main.humidity}%`;
            cardWind.textContent = `Wind: ${fiveDayObject[i].wind.speed} mph`;
            cardTemp.textContent = `Temperature: ${fiveDayObject[i].main.temp} °F`;

            card.appendChild(cardDate);
            card.appendChild(cardIcon);
            card.appendChild(cardDescription);
            card.appendChild(cardHumidity);
            card.appendChild(cardTemp);
            card.appendChild(cardWind);
            forecastCardParent.appendChild(card);

        }

    })

}

function cityHistory(cityName) {
    userSearchHistory.push(cityName);
    localStorage.setItem('history', JSON.stringify(userSearchHistory));
    createBtns()
}

function createBtns() {
    // run a forloop that will take the length of the userSearch history. Have it create a button for every item inside the array. append that item to the element with the id forecast-cards

}


searchFormBtn.addEventListener('submit', handleUserInput)

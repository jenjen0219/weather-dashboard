var APIKey = '4ef3772979be6dce53798914fca77969';


// var queryURLForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;


// target form elements
var searchFormBtn = document.getElementById("searchCityEl")
var userInput = document.getElementById('cityName');

function handleUserInput(event){
    event.preventDefault()
   currentWeather(userInput.value)
   getForecast(userInput.value)

}


function currentWeather(city){
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    fetch(queryURL).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data);
    })
}

function getForecast(city){
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

    fetch(queryURL).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data);
    })
}



searchFormBtn.addEventListener('submit', handleUserInput)
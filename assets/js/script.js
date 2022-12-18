var APIKey = '4ef3772979be6dce53798914fca77969';
var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL);

// forecast.humidity.value


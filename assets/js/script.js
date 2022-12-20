var APIKey = '4ef3772979be6dce53798914fca77969';
var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
console.log(queryURL);

// fetch(queryURL)
// .then(response => response,json())
// .then( data => {

// })

// forecast.humidity.value

http://api.openweathermap.org/data/2.5/weather?q=seattle&appid=4ef3772979be6dce53798914fca77969
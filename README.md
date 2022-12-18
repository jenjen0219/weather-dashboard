GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city


okay so it seems like this is a super simple website! 

FIRST MAJOR FUNCTIONALITY
- we will be able to enter the name of a city and then hit the enter button which will trigger for a list to now include a button with the name of the city along with a 5 day forecast and other weather related details that will all be saved into localstorage for later use
    breaking this down even further we will have 
    - a list of current info on the weather 
    - a 5 day forecast 
    - and a button with the saved local storage of all the previous details

    so essentially when the name of a city is entered then we need the current weather conditions to load along with the 5 day weather forecast and all this data should be saved within local storage to allow us to plug in this information into 

- when you select on one of the buttons in the list then it will show you once again the weather details of that location 


okay so yeah it looks like we just need to call our api once and then we will be able to grab all of the necessary data, store it into variables, send it off to local storage, and attach to a button that can recall all of that stored information



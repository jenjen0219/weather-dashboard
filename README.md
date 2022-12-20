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

-----------------------------------------------------------------------
when i select the enter button

1. ERROR CHECK: CITY NAME - whatever city is in the search bar should be correctly written with no numbers in the entry so we will have to ensure proper data entry 

2. FETCH & OBTAIN: CITY WEATHER CONDITIONS - with the name of the city now supplied we can use it to create the api response  with all the weather data we need which is the current conditions and future (5 DAY FORECAST)
    2a. current conditions: WEATHER ICON, HUMIDITY, WIND, & TEMPERATURE
    2b. future conditions: 5 DAY FORECAST

3. SAVE TO LOCALSTORAGE: CITY WEATHER DATA - i believe all we have to save is the city names so that when our user comes back they can just click and not have to research their city

4. ADJUST DISPLAY: CITY WEATHER RESULTS - so we've done enough with all of our data, now we need to push it back to the user and present them with our weather conditions along with creating a button within a list of searched cities 
-----------------------------------------------------------------------
when i select a city within the searched cities list 

1. ADJUST DISPLAY: SELECTED CITY - all of the city weather info is presented from both present and future
    1a. we want our user to have the most updated weather info so we will run another api request 
    1b. grab the data we need from our api response 
    1c. change the dom and push the new display 

    
# whether-weather

This is a weather app designed by Andre Pangoni as part of an assignment for the Higher Diploma in Computer Science 2025 course.
It is a simplified version of a weather website that uses hardcoded database, intended to showcase the UI, navigation, and user interactions, data retrieve and manipulation.

## What the Project Does

The webpage provides detailed information about the weather:

- Dashboard: A home page displaying the current weather for the available cities.
- City Focus: A page showcasing more detailed weather information for each city.
    All cities use the same page structure, dynamically adapting based on the URL parameters.
- Favorite Cities: This page is similar to the Dashboard but displays only the user's selected favorite cities.
    The Dashboard is reused for this purpose by adding a parameter to the URL.
- Settings: A page where the user can customize the website, such as selecting their favorite cities and preferred temperature unit.

Initially, users can navigate from the Dashboard to each individual city page and the Settings page.
Once a user selects any favorite cities in the Settings, a new menu appears, allowing them to access the Favorite Cities page.
They can either click directly or use a dropdown that appears when hovering over the new menu button to navigate to the individual city page.

## Why the Project is Useful

This project is a fun and interactive way to explore information about the weather across famous cities. 
It is designed to be simple, responsive, and visually appealing, making it a great tool to interact with and get informed about the weather.

## Where users can get help with the project

For mor information or to get help with the project, users can contact the developer at: https://github.com/andreeeeh/whether-weather

## How Users Can Get Started with the Project

You can access the project deployed here: https://whether-weather-andre-pangoni.netlify.app/

Or fork from the repository from the link above and:

1. On your terminal, run the command: npm install
2. To start the project, run the command: npm start.

## Who maintains and contributes to the project

This project was built with the help of several external resources:

Images from:
https://www.flaticon.com/

Style: 
https://bulma.io/

## Independent learning

https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13
https://day.js.org/docs/en/plugin/loading-into-browser
https://day.js.org/docs/en/plugin/localized-format
https://day.js.org/docs/en/display/format#list-of-localized-formats

To create the logic to get the updated weekly weather:
https://stackoverflow.com/questions/9271670/get-tomorrows-date-with-getday-javascript/9271706
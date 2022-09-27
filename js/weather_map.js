"use strict"
console.log("Welcome to the Weather Map");

$(function(){

    //Loading in the map
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });

    map.setZoom(11)
    map.scrollZoom.disable()
    map.setCenter([-98.441372, 29.49169])




    //finding the cardinal direction from degrees
    function windCardinalDirection(degrees){
        let cardinalDirection = '';
        if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
            cardinalDirection = "N";
        } else if (degrees > 11.25 && degrees  <= 33.75) {
            cardinalDirection = "NNE";
        } else if (degrees > 33.75 && degrees <= 56.25) {
            cardinalDirection = "NE";
        } else if (degrees > 56.25 && degrees <= 78.75) {
            cardinalDirection = "ENE";
        } else if (degrees > 78.75 && degrees <= 101.25) {
            cardinalDirection = "E";
        } else if (degrees > 101.25 && degrees <= 123.75) {
            cardinalDirection = "ESE";
        } else if (degrees > 123.75 && degrees <= 146.25) {
            cardinalDirection = "SE";
        } else if (degrees > 146.25 && degrees <= 168.75) {
            cardinalDirection = "SSE";
        } else if (degrees > 168.75 && degrees <= 191.25) {
            cardinalDirection = "S";
        } else  if (degrees > 191.25 && degrees <= 213.75) {
            cardinalDirection = "SSW";
        } else if (degrees > 213.75 && degrees <= 236.25)  {
            cardinalDirection = "SW";
        } else if (degrees > 236.25 && degrees <= 258.75) {
            cardinalDirection = "WSW";
        } else if (degrees > 258.75 && degrees <= 281.25) {
            cardinalDirection = "W";
        } else if (degrees > 281.25 && degrees <= 303.75) {
            cardinalDirection = "WNW";
        } else if (degrees > 303.75 && degrees <= 326.25) {
            cardinalDirection = "NW";
        } else if (degrees > 326.75 && degrees <= 348.75) {
            cardinalDirection = "NNW";
        }
        return cardinalDirection;
    }

    function appendLeadingZeroes(n){
        if(n <= 9){
            return "0" + n;
        }
        return n;
    }

    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    function formatTime(timeStamp){
        let dateTime = new Date(timeStamp * 1000);
        let year = dateTime.getFullYear();
        let month = months[dateTime.getMonth()];
        let day = dateTime.getDate();
        let hour = appendLeadingZeroes(dateTime.getHours());
        let minutes = appendLeadingZeroes(dateTime.getMinutes());
        let seconds = appendLeadingZeroes(dateTime.getSeconds());
        let formattedDateTime = month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
        return formattedDateTime;
    }

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function namedDayFromDay(timeStamp){
        let dateTime = new Date(timeStamp * 1000);
        return daysOfWeek[dateTime.getDay()];
    }


    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log(`The Weather: `, data);

        console.log(`Temperature is: `, data.main.temp)

        console.log(`The Wind Speed is: `, data.wind.speed)

        // $(".card").append(<h5 class="")
        $(".card").append(`
        
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" class="card-img-top" alt="Todays Weather icon">
          <p class="card-text mb-0">Temperature: ${data.main.temp}</p>
          <p class="card-text mb-0">Feels Like: ${data.main.feels_like}</p>
          <hr>
          <p class="card-text mb-1">Description: ${data.weather[0].description}</p>
        `)

        // $("body").append(`<p><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"></p>`)

        // "http://openweathermap.org/img/w/${data.weather[0].icon}.png"

        console.log(windCardinalDirection(data.wind.deg));

        // $(".card").append(`<p>The Current Wind Speed is: ${data.wind.speed} mph ${windCardinalDirection(data.wind.deg)} \<br> The Current Temperature is: ${data.main.temp}`)
    });

    // If you want to add the icons the URLs for OpenWeatherMap's icons are formatted like: http://openweathermap.org/img/w/[icon].png where [icon] comes from the API response.



    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log('The Forecast: ', data);
        console.log(`The list object: `, data.list);
        console.log(`The City Object: `, data.city);
        console.log(`The value of the population property: `, data.city.population)
        console.log(`Grabbing the visibility value: `, data.list[0].visibility);
        // data.list.forEach((forecast, index) => {
        //     if (index < 5){
        //         console.log(forecast);
        //     }
        // })
        console.log(`Getting the time: `, formatTime(data.list[0].dt))
        $("h6").append(`${formatTime(data.list[0].dt)}`)
    });

    // $.get("http://api.openweathermap.org/data/2.5/hourly", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat: 29.423017,
    //     lon: -98.48527
    // }).done(function(data) {
    //     console.log(data);
    // });

    // https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}

})

//San Antonio Latitude and Longitude: lat: 29.477187597554924, long: -98.4552939951812
//also try: lat: 29.4241 long: -98.4936

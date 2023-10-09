import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <>
            <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>1kochi v1.6.2</title>

<!-- Include Bloodhound and Typeahead.js -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js"></script>


  <style>
a:hover, .active {
    opacity: 1;
    transition: opacity 1s;
}
dotlottie-player {
    width: 216px !important;
    height: auto !important;
    position: absolute;
    right: -150px;
    top: -50px;
display:none;
}
 .content-wrapper {
margin: 0 auto;
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(301px, 1fr));
    grid-gap: 0rem;
    justify-content: center;
    padding: 0.5rem;
    }

    .news-card {
      border: 0px solid aqua;
      margin: 0.5rem;
      position: relative;
      height: 20rem;
      overflow: hidden;
      border-radius: 0.5rem;
      flex: 1;
      min-width: 290px;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
    }
.news-card__source {
    color: #0cdfd8;
}
h3#humidity {
    font-family: arial black !important;
    letter-spacing: -1px;
    color: #add4ff;
}
span#num {}

#num {
    font-family: arial black;
    letter-spacing: -3px;
    color: #a4cef3;
}
.wi {

    color: #00cbff !important;
}
h2#city {
    font-family: arial black;
    letter-spacing: -2px;
    color: #a3cef2;
    border-bottom: 1px solid #a3cef214;
    padding-bottom: 12px;
}
h3#wind {
    font-family: arial black !important;
    letter-spacing: -1px;
    color: #add4ff;
}

h3#dt {
    font-family: arial black !important;
    letter-spacing: -1px;
    color: #add4ff;
}

h3#description {
    font-family: arial black !important;
    letter-spacing: -1px;
    color: #add4ff;
}
    @media (min-width: 900px) {
      .news-card {
        height: 20rem
      }
    }

.news-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(56 43 43 / 10%) linear-gradient(to bottom, rgb(1 19 62 / 69%) 50%, rgb(0 32 109) 77%);
    z-index: 0;
}

    .news-card__card-link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .news-card__image {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      transition: transform 3s ease;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      position: relative;
      z-index: -1;
    }

    .news-card__text-wrapper {
      position: absolute;
      bottom: 0rem;
      padding: 1rem;
      color: white;
      transition: background-color 1.5s ease;
      text-shadow: 2px 2px 2px black;
    }

    .news-card__title {
      transition: color 1s ease;
      margin-bottom: .5rem;
    }

    .news-card__post-date {
      font-size: .7rem;
      margin-bottom: .5rem;
      color: #CCC;
    }

    .news-card__details-wrapper {
      max-height: 0;
      opacity: 0;
      transition: max-height 1.5s ease, opacity 1s ease;
    }

    @media (min-width: 900px) {
      .news-card:hover .news-card__details-wrapper {
        max-height: 20rem;
        opacity: 1;
      }

      .news-card:hover .news-card__text-wrapper {
        background-color: rgba(0, 0, 0, 0.6);
      }

      .news-card:hover .news-card__title {
        color: white;
      }

      .news-card:hover .news-card__image {
        transform: scale(1.2);
        z-index: -1;
      }
    }

    .news-card__excerpt {
      font-weight: 300;
    }

    .news-card__read-more {
    background: #737373;
    color: #fff;
    display: block;
    padding: 0.4rem 0.6rem;
    border-radius: 0.3rem;
    margin-top: 1rem;
    border: 1px solid #656565;
    font-size: 1rem;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-decoration: none;
    width: 7rem;
    margin-left: auto;
    position: relative;
    z-index: 5;
    text-shadow: none;
    font-family: arial black;
    letter-spacing: -1px;

    }

    .news-card__read-more i {
      position: relative;
      left: 0.2rem;
      color: #888;
      transition: left 0.5s ease, color 0.6s ease;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .news-card__read-more:hover i {
      left: 0.5rem;
      color: yellow;
    }

    /* Placeholder Animation Styles */
    .placeholder-content {
      overflow: hidden;
      background: #000;
      position: relative;
      -webkit-animation-duration: 0.7s;
      animation-duration: 0.7s;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-name: placeholderAnimate;
      animation-name: placeholderAnimate;
      background: #f6f7f8;
      background: linear-gradient(to right, #e6e6e6 2%, #eee 18%, #f6f8fa 33%);
      background-size: 1300px;
    }

    .placeholder-content_item {
      width: 100%;
      height: 20px;
      position: absolute;
      background: #fff;
      z-index: 2;
    }

    .placeholder-content_item:after, .placeholder-content_item:before {
      width: inherit;
      height: inherit;
      content: "";
      position: absolute;
    }

    .placeholder-content_item:nth-child(1) {
      top: 135px;
      left: 0;
      bottom: 0;
      width: 200px;
      height: auto;
    }

    /* Add more placeholder styles as needed */

    @-webkit-keyframes placeholderAnimate {
      0% {
        background-position: -650px 0;
      }
      100% {
        background-position: 650px 0;
      }
    }

    @keyframes placeholderAnimate {
      0% {
        background-position: -650px 0;
      }
      100% {
        background-position: 650px 0;
      }
    }

  .content-hidden {
  display: none;
}
h2.news-card__title {
    font-family: arial black;
    line-height: 1;
    font-size: 1.4rem;
}
   /* width */
   ::-webkit-scrollbar {
   width: 4px;
   }
   /* Track */
   ::-webkit-scrollbar-track {
   background: #f1f1f1;
   }
   /* Handle */
   ::-webkit-scrollbar-thumb {
   background: #007bff;
   }
   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
   background: #52a5ff;
   }
.custom-dropdown {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 10px;
    font-size: 37px;
    font-family: arial black;
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
    border-bottom: 0px solid #062776;
    margin: 0 auto;
    position: sticky;
    left: 82%;
    width:200px;
    margin-right: -190px;
    top: 0;
    z-index: 9999;
    color: #027bff;
    box-shadow: 0px 1px 1px 0px rgb(0 48 100 / 19%);
    max-width: 600px;
    text-align: right;
    margin-bottom: 17px;
    letter-spacing: -2px;
}

/* Custom styles for the dropdown arrow */
.custom-dropdown::after {
  content: "▼"; /* Unicode down arrow */
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none; /* Ensure the arrow doesn't interfere with the select */
}

/* Hover effect for the dropdown */
.custom-dropdown:hover {
    background-color: #f2f2f200;
    transform: translateY(-2px);
    color: white;
}

/* Rotate the arrow when the dropdown is open */
.custom-dropdown.select-open::after {
  transform: translateY(-50%) rotate(180deg);
}

/* Style the dropdown options */
.custom-dropdown option {
  background-color: #fff;
  color: #333;
  font-size: 16px;
}

/* Hover effect for the dropdown options */
.custom-dropdown option:hover {
  background-color: #007bff;
  color: #fff;
}
This CSS will give the blue border a soft glow effect when you hover over the dropdown, creating a visually appealing interaction.







  </style>
</head>
<body>
  <div class="preloader">Loading...</div>
<div style="
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    position: absolute;
    left: 50%;
    margin-left: -250px;
    top: 24px;
">
<script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

    <dotlottie-player src="https://lottie.host/f911d55d-f09e-45c3-9f19-da58a68cbdfb/dQ28N21ilM.json" background="transparent" speed="1" style="width: 100%; height: 100%;" loop autoplay></dotlottie-player>
<a href="https://1kochi.com" title="1Kochi.com Home"><img src="https://cms.1arabia.com/1kochi-logo-main.png?34d534" title="1Kochi - Unveiling Kochi's Essence" class="k1-logo" style="height: auto;max-width: 420px;width: 100%;"></a></div>
 <!-- <input type="text" id="search-input" placeholder="Search...">-->
 <select id="category-filter" class="custom-dropdown">
    <option value="all"> /All</option>
    <!-- Add more options based on extracted categories -->
  </select>  <div class="content-item" data-category="Local">
                   <div>
                    <div class='wrapper'>
<div class="kads1" style="
    float: left;
    position: absolute;
    left: 50%;
    margin-left: -364px;
    top: 166px;
    max-width: 728px;
    width: 100%;
    height: 90px;
    border: 1px solid #bcbcbc69;
    text-align: center;
    line-height: 5.59;
    font-family: arial;
    color: #799bc6;
">Advertise</div>
<style>
@media only screen and (max-width: 700px) {
img.k1-logo { display: none; } 
}

@media only screen and (max-width: 1400px) {
.kads1 {
 left:54% !important;
}
   
}

@media only screen and (max-width: 1300px) {
.kads1 {
  left:54% !important;

}
   
}

@media only screen and (max-width: 1280px) {
.kads1 {
 display:none !important;
}
   
}
</style>
 
  <div class='panel'>
    <h2 class='city' id='city'></h2>
    <div class='weather' id='weather'>
      <div class='group secondary'>
        <h3 id='dt'></h3>
        <h3 id='description'></h3>
      </div>
      <div class='group secondary'>
        <h3 id='wind'></h3>
        <h3 id='humidity'></h3>
      </div>
      <div class='temperature' id='temperature'>
        <h1 class='temp' id='temp'><i id='condition'></i> <span id='num'></span><a class='fahrenheit active' id='fahrenheit' href="#">&deg;F</a><span class='divider secondary'>|</span><a class='celsius' id='celsius' href="#">&deg;C</a></h1>
      </div>
      <div class='forecast' id='forecast'></div>
    </div>
  </div>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,300,100');
@import url('https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.3.2/css/weather-icons.min.css');

h1,
h2,
h3,
h4 {
  color: white;
  font-family: 'Roboto';
  font-weight: 100;
  line-height: 1.1;
  letter-spacing: 0.025em;
  margin: 0; padding: 0;
}
a {
  color: white;
  opacity: 0.54;
  text-decoration: none;
}
a:hover,
.active {opacity: 1;}

.wrapper {
width: 100%;
    margin: 0 auto;
    max-width: 93%;
}
.searchbar,
.button {
  height: 45px;
  margin: 1em 0 4em;
  padding: 0;
  font: 400 1rem 'Roboto';
  letter-spacing: 0.025em;
  text-transform: uppercase;
  color: white;
  border: none;
}
.searchbar {
  float: left;
  width: 380px;
  border-bottom: solid thin white;
  color: #E8E8E8;
  color: rgba(255, 255, 255, 0.7);
}

.searchbar::-webkit-input-placeholder {color: white; opacity: 0.35;}
.searchbar::-moz-placeholder {color: white; opacity: 0.35;}
.searchbar:-ms-input-placeholder {color: white; opacity: 0.35;}
.searchbar:-moz-placeholder {color: white; opacity: 0.35;}

.button:focus,
.searchbar:focus {outline: none; color: white;}
.searchbar:focus::-webkit-input-placeholder {color: white; opacity: 0.7;}
.searchbar:focus::-moz-placeholder {color: white; opacity: 0.7;}
.searchbar:focus:-ms-input-placeholder {color: white; opacity: 0.7;}
.searchbar:focus:-moz-placeholder {color: white; opacity: 0.7;}

.button {
  float: right;
  width: 100px;
}
.panel {
  width: 100%;
  display: inline-block;
}
.weather {
  width: 100%;
  margin-top: 20px;
  display: inline-block;
}
.city {
  text-align: left;
  border-bottom: solid thin white;
  text-transform: uppercase;
  color: #E8E8E8;
  color: rgba(255, 255, 255, 0.7);
}
.group {
  width: 165px;
  margin-bottom: 20px;
  text-align: right;
  float: right;
  clear: both;
}
.temp {
  font-size: 4.5em;
  font-weight: 300;
  line-height: 0.75;
}
.celsius,
.fahrenheit,
.divider {
  font-size: 1.75rem;
  vertical-align: super;
}
.divider {
  margin: 0 0.05em;
}
.forecast {
  display: table;
  text-transform: uppercase;
  width: 100%;
}
.block {
  display: table-cell;
  padding: 1.5em 0 0 0;
  text-align: center;
}
.high {
  font-weight: 300;
  margin: 0.25em 0;
}

.secondary {opacity: 0.7;}
.transparent {background: transparent;}
.hot {background: transparent;}
.warm {background: transparent;}
.cool {background: transparent;}
.cold {background: transparent;}
.color404 {background: transparent;}
.button-hot {background: #BF360C;}
.button-warm {background: #B34E00;}
.button-cool {background: #0D47A1;}
.button-cold {background: #1A237E;}
.button404 {background: black;}
</style>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script>
function titleCase(str) {
  return str.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.substring(1);
  }).join(' ');
}

function fullDay(str) {
  switch (str) {
    case 'Tue':
      return 'Tuesday';
    case 'Wed':
      return 'Wednesday';
    case 'Thu':
      return 'Thursday';
    case 'Sat':
      return 'Saturday';
    default:
      return str + 'day';
  }
}

$(function() {
  
  var $wrapper = $('.wrapper'),
    $panel = $wrapper.find('.panel'),
    $city = $panel.find('#city'),
    $weather = $panel.find('.weather'),
    $group = $panel.find('.group'),
    $dt = $group.find('#dt'),
    $description = $group.find('#description'),
    $wind = $group.find('#wind'),
    $humidity = $group.find('#humidity'),
    $temperature = $weather.find('#temperature'),
    $temp = $temperature.find('#temp'),
    $icon = $temp.find('#condition'),
    $tempNumber = $temp.find('#num'),
    $celsius = $temp.find('#celsius'),
    $fahrenheit = $temp.find('#fahrenheit'),
    $forecast = $weather.find('#forecast'),
    $search = $wrapper.find('search'),
    $form = $search.find('form'),
    $button = $form.find('#button');

  $.ajax({
      dataType: 'json',
      url: '//ipapi.co/202.164.139.13/json/'
    })
    .then(function(data) {
      var yourLocation = data.city + ',' + data.postal + ',' + data.country;
      getWeather(yourLocation);
    });

  function getWeather(input) {

    var appid = '47833da05905bf9bc6b0932111da8f34';
    var requestWeather = $.ajax({
      dataType: 'json',
      url: '//api.openweathermap.org/data/2.5/weather',
      data: {
        q: input,
        units: 'imperial',
        appid: appid
      }
    });
    var requestForecast = $.ajax({
      dataType: 'json',
      url: '//api.openweathermap.org/data/2.5/forecast/daily',
      data: {
        q: input,
        units: 'imperial',
        cnt: '6',
        appid: appid
      }
    });

    $fahrenheit.addClass('active').removeAttr('href');
    $celsius.removeClass('active').attr("href", '#');
    $icon.removeClass();
    $button.removeClass().addClass('button transparent');

    requestWeather.done(function(data) {

      var weather = document.getElementById('weather');
      if (data.cod === '404') {
        $city.html('city not found');
        setBackground('color404', 'button404');
        weather.style.display = 'none';
      } else weather.style.display = '';

      var dt = new Date(data.dt * 1000).toString().split(' ');

      var title = data.sys.country
        ? data.name + ', ' + data.sys.country
        : data.name;

      $city.html(title);
      $tempNumber.html(Math.round(data.main.temp));
      $description.html(titleCase(data.weather[0].description));
      $wind.html('Wind: ' + data.wind.speed + ' mph');
      $humidity.html('Humidity ' + data.main.humidity + '%');
      $dt.html(fullDay(dt[0]) + ' ' + dt[4].substring(0, 5));

      $celsius.on('click', toCelsius);
      $fahrenheit.on('click', toFahrenheit);

      function toCelsius() {
        $(this).addClass('active').removeAttr('href');
        $fahrenheit.removeClass('active').attr('href', '#');
        $tempNumber.html(Math.round((data.main.temp - 32) * (5 / 9)));
      }

      function toFahrenheit() {
        $(this).addClass('active').removeAttr('href');
        $celsius.removeClass('active').attr("href", '#');
        $tempNumber.html(Math.round(data.main.temp));
      }

      function setBackground(background, button) {
        $('body').removeClass().addClass(background);
        $button.off().hover(function() {
          $(this).removeClass('transparent').addClass(button);
        }, function() {
          $(this).removeClass().addClass('button transparent');
        });
      }

      if (data.main.temp >= 80) setBackground('hot', 'button-hot');
      else if (data.main.temp >= 70) setBackground('warm', 'button-warm');
      else if (data.main.temp >= 60) setBackground('cool', 'button-cool');
      else setBackground('cold', 'button-cold');

      switch (data.weather[0].icon) {
        case '01d':
          $icon.addClass('wi wi-day-sunny');
          break;
        case '02d':
          $icon.addClass('wi wi-day-sunny-overcast');
          break;
        case '01n':
          $icon.addClass('wi wi-night-clear');
          break;
        case '02n':
          $icon.addClass('wi wi-night-partly-cloudy');
          break;
      }

      switch (data.weather[0].icon.substr(0, 2)) {
        case '03':
          $icon.addClass('wi wi-cloud');
          break;
        case '04':
          $icon.addClass('wi wi-cloudy');
          break;
        case '09':
          $icon.addClass('wi wi-showers');
          break;
        case '10':
          $icon.addClass('wi wi-rain');
          break;
        case '11':
          $icon.addClass('wi wi-thunderstorm');
          break;
        case '13':
          $icon.addClass('wi wi-snow');
          break;
        case '50':
          $icon.addClass('wi wi-fog');
          break;
      }
    });

    requestForecast.done(function(data) {

      $celsius.on('click', toCelsius);
      $fahrenheit.on('click', toFahrenheit);

      var forecast = [];
      var length = data.list.length;
      for (var i = 1; i < length; i++) {
        forecast.push({
          date: new Date(data.list[i].dt * 1000).toString().split(' ')[0],
          fahrenheit: {
            high: Math.round(data.list[i].temp.max),
            low: Math.round(data.list[i].temp.min),
          },
          celsius: {
            high: Math.round((data.list[i].temp.max - 32) * (5 / 9)),
            low: Math.round((data.list[i].temp.min - 32) * (5 / 9))
          }
        });
      }

      function toCelsius() {
        doForecast('celsius');
      }

      function toFahrenheit() {
        doForecast('fahrenheit');
      }

      function doForecast(unit) {
        var arr = [];
        var length = forecast.length;
        for (var i = 0; i < length; i++) {
          arr[i] = ("<div class='block'><h3 class='secondary'>" + forecast[i].date + "</h3><h2 class='high'>" + forecast[i][unit].high + "</h2><h4 class='secondary'>" + forecast[i][unit].low + "</h4></div>");
        }
        $forecast.html(arr.join(''));
      }

      doForecast('fahrenheit');
    });
  }

  $form.submit(function(event) {
    var input = document.getElementById('search').value;
    var inputLength = input.length;
    if (inputLength) getWeather(input);
    event.preventDefault();
  });

});

</script>
                      </div>
                    </div> 
  <div class="content-wrapper">
 



  </div>
  <script type="text/javascript">
    // Your JavaScript code
    // ...
  </script>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.11.1/typeahead.bundle.min.js"></script>

<script type="text/javascript">
  $(document).ready(function () {
    const contentWrapper = $(".content-wrapper");
    let totalItemsLoaded = 0;
    const uniqueArticleIds = new Set();

    const feeds = [
          {
        url:
          "https://www.google.co.in/alerts/feeds/14378336641880761445/3728911973530232813",
        items: 12,
        category: "/breaking",
      }, {
        url:
          "https://www.google.co.in/alerts/feeds/14378336641880761445/14214467418902467187",
        items: 12,
        category: "/airlines",
      },

            {
        url:
          "https://www.google.co.in/alerts/feeds/14378336641880761445/9979423434097815526",
        items: 12,
        category: "/literature",
      },

            {
        url:
          "https://www.google.co.in/alerts/feeds/14378336641880761445/9979423434097814611",
        items: 12,
        category: "/food",
      },
            {
        url:
          "https://www.google.co.in/alerts/feeds/14378336641880761445/3347891586809145225",
        items: 12,
        category: "/tourism",
      },
            {
        url:
          "https://www.google.co.in/alerts/feeds/14378336641880761445/9496655339021153842",
        items: 12,
        category: "/travel",
      },


            {
        url:
          "https://www.google.co.in/alerts/feeds/14378336641880761445/1081391072984560739",
        items: 3,
        category: "/startups",
      },

            {
        url:
          "https://www.google.co.in/alerts/feeds/14378336641880761445/16488713094048669270",
        items: 12,
        category: "/ME",
      },

            {
        url:
          "https://www.google.co.in/alerts/feeds/14378336641880761445/309089573981946164",
        items: 12,
        category: "/world",
      },


      {
        url:
          "https://www.google.com/alerts/feeds/14378336641880761445/10069732107167807509",
        items: 12,
        category: "/city",
      },
      {
        url:
          "https://www.google.com/alerts/feeds/14378336641880761445/8089595701251970144",
        items: 13,
        category: "/events",
      },
      {
        url:
          "https://www.google.co.in/alerts/feeds/14378336641880761445/14278107360167118508",
        items: 16,
        category: "/kerala",
      },
            {
        url:
          "https://www.google.com/alerts/feeds/14378336641880761445/6450012512796052229",
        items: 16,
        category: "/more",
      },
            {
        url:
          "https://www.google.com/alerts/feeds/14378336641880761445/6701388071525834756",
        items: 16,
        category: "/india",
      },
            {
        url:
          "https://www.google.com/alerts/feeds/14378336641880761445/9810914736097805522",
        items: 16,
        category: "/movies",
      },
    ];
   

    // Initialize Bloodhound with your data source
    const searchData = [
      { title: "Item 1", link: "https://example.com/item1" },
      { title: "Item 2", link: "https://example.com/item2" },
      // Add more items here
    ];

   // Infinite Scroll
            const loadMoreThreshold = 200; // Threshold in pixels from the bottom to trigger loading more items
            $(window).scroll(function () {
                if ($(window).scrollTop() + $(window).height() >= $(document).height() - loadMoreThreshold) {
                    loadMoreItems();
                }
            });

            let currentPage = 1;
            const itemsPerPage = 12;

            function loadMoreItems() {
                const selectedCategory = $("#category-filter").val();
                const filteredFeeds = feeds.filter(feed => selectedCategory === "all" || feed.category === selectedCategory);
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const feedsToLoad = filteredFeeds.slice(startIndex, endIndex);

                feedsToLoad.forEach(feed => {
                    loadRSS(feed.url, feed.items, feed.category);
                });

                currentPage++;
            }

            // Search Input
            $("#search-input").on('input', function () {
                const query = $(this).val();
                filterBySearch(query);
            });

            function filterBySearch(query) {
                const selectedCategory = $("#category-filter").val();

                if (selectedCategory === "all") {
                    contentWrapper.find(".content-item, .news-card").removeClass("content-hidden");
                } else {
                    contentWrapper.find(".content-item, .news-card").addClass("content-hidden");
                    contentWrapper.find(`.news-card[data-category="${selectedCategory}"], .content-item[data-category="${selectedCategory}"]`).removeClass("content-hidden");
                }

                if (query) {
                    contentWrapper.find(".content-item, .news-card").addClass("content-hidden");
                    contentWrapper.find(`.news-card:contains('${query}'), .content-item:contains('${query}')`).removeClass("content-hidden");
                }
            }

    // Populate the category filter dropdown
    const uniqueCategories = Array.from(new Set(feeds.map((feed) => feed.category)));
    const categoryFilter = $("#category-filter");

    uniqueCategories.forEach((category) => {
      const option = `<option value="${category}">${category}</option>`;
      categoryFilter.append(option);
    });

    const totalItemsToFetch = feeds.reduce(
      (total, feed) => total + feed.items,
      0
    );

    feeds.forEach(function (feed) {
      loadRSS(feed.url, feed.items, feed.category);
    });

    document.querySelector(".preloader").style.display = "none";

    function loadRSS(link, numItems, category) {
      var url = link;

      $.ajax({
        url: `https://api.rss2json.com/v1/api.json?rss_url=${url}`,
        method: "GET",
        dataType: "json",
        success: function (result) {
          if (result.status === "ok") {
            var entries = result.items.slice(0, numItems);
            if (entries.length > 0) {
              entries.forEach(function (entry) {
                if (!uniqueArticleIds.has(entry.guid)) {
                  var imageHTML = extractImageFromContent(
                    entry.content || entry.description
                  );
                  var excerpt = getExcerptWithoutImages(entry.description);
                  var readMoreLink = entry.link;
                  var postDate = new Date(entry.pubDate).toLocaleDateString();
                  var keywords = encodeURIComponent(
                    getKeywordsFromContent(entry)
                  );

                  var title = entry.title;
                  var source = "";
                  var titleParts = title.split(" - ");

                  if (titleParts.length > 1) {
                    title = titleParts[0];
                    source = titleParts[1];
                  }

                  var articleHTML = `
                    <div class="news-card placeholder-content" data-category="${category}">
                      <a href="${readMoreLink}" class="news-card__card-link" target="_blank"></a>
                      ${imageHTML || `<img src="https://source.unsplash.com/600x400/?${keywords}" alt="" class="news-card__image">`}
                      <div class="news-card__text-wrapper">
                        <h2 class="news-card__title">${title}</h2>
                        <div class="news-card__source">${source}</div>
                        <div class="news-card__meta">
                          <div class="news-card__post-date">${postDate}</div>
                        </div>
                        <div class="news-card__details-wrapper">
                          <p class="news-card__excerpt">${excerpt}</p>
                          <a href="${entry.link}" class="news-card__read-more">Full story <i class="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                      </div>
                    </div>
                  `;

                  var feedItemContainer = $('<div class="content-item"></div>');
                  feedItemContainer.attr('data-category', category);
                  feedItemContainer.html(articleHTML);
                  contentWrapper.append(feedItemContainer);

                  uniqueArticleIds.add(entry.guid);
                  totalItemsLoaded++;

                  if (totalItemsLoaded >= totalItemsToFetch) {
                    document.querySelector(".preloader").style.display = "none";
                  }
                }
              });
            } else {
              console.log("No entries found.");
            }
          } else {
            console.log("Failed to fetch RSS feed.");
          }
        },
        error: function () {
          console.log("Error fetching RSS feed.");
        },
      });
    }

    function extractImageFromContent(content) {
      var imgRegex = /<img[^>]*src="([^"]+)"[^>]*>/;
      var imgMatch = imgRegex.exec(content);

      if (imgMatch && imgMatch.length > 1) {
        return imgMatch[0];
      } else {
        return "";
      }
    }

    function getExcerptWithoutImages(description) {
      if (!description) {
        return "";
      }

      var sanitizedDescription = description.replace(
        /<img[^>]*>|<table[\s\S]*?<\/table>/gi,
        ""
      );

      var maxExcerptLength = 250;
      if (sanitizedDescription.length > maxExcerptLength) {
        sanitizedDescription =
          sanitizedDescription.substring(0, maxExcerptLength) + "...";
      }

      return sanitizedDescription;
    }

    function getKeywordsFromContent(entry) {
      var content = entry.content || entry.description;
      var keywords = "";

      if (content) {
        var contentWords = content.split(" ");
        keywords = contentWords.join(",");
      }

      return keywords;
    }

    $("#category-filter").change(function () {
      const selectedCategory = $(this).val();

      if (selectedCategory === "all") {
        contentWrapper.find(".content-item, .news-card").removeClass("content-hidden");
      } else {
        contentWrapper.find(".content-item, .news-card").addClass("content-hidden");
        contentWrapper.find(`.news-card[data-category="${selectedCategory}"], .content-item[data-category="${selectedCategory}"]`).removeClass("content-hidden");
      }
    });
  });
</script>



</body>
</html>

        </>
    )
}

export default Header

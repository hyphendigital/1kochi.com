import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <>
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>1kochi v1.6.2</title>
  {/* Include Bloodhound and Typeahead.js */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\na:hover, .active {\n    opacity: 1;\n    transition: opacity 1s;\n}\ndotlottie-player {\n    width: 216px !important;\n    height: auto !important;\n    position: absolute;\n    right: -150px;\n    top: -50px;\ndisplay:none;\n}\n .content-wrapper {\nmargin: 0 auto;\n    max-width: 1400px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(301px, 1fr));\n    grid-gap: 0rem;\n    justify-content: center;\n    padding: 0.5rem;\n    }\n\n    .news-card {\n      border: 0px solid aqua;\n      margin: 0.5rem;\n      position: relative;\n      height: 20rem;\n      overflow: hidden;\n      border-radius: 0.5rem;\n      flex: 1;\n      min-width: 290px;\n      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);\n      -webkit-backface-visibility: hidden;\n      -moz-backface-visibility: hidden;\n      -webkit-transform: translate3d(0, 0, 0);\n      -moz-transform: translate3d(0, 0, 0);\n    }\n.news-card__source {\n    color: #0cdfd8;\n}\nh3#humidity {\n    font-family: arial black !important;\n    letter-spacing: -1px;\n    color: #add4ff;\n}\nspan#num {}\n\n#num {\n    font-family: arial black;\n    letter-spacing: -3px;\n    color: #a4cef3;\n}\n.wi {\n\n    color: #00cbff !important;\n}\nh2#city {\n    font-family: arial black;\n    letter-spacing: -2px;\n    color: #a3cef2;\n    border-bottom: 1px solid #a3cef214;\n    padding-bottom: 12px;\n}\nh3#wind {\n    font-family: arial black !important;\n    letter-spacing: -1px;\n    color: #add4ff;\n}\n\nh3#dt {\n    font-family: arial black !important;\n    letter-spacing: -1px;\n    color: #add4ff;\n}\n\nh3#description {\n    font-family: arial black !important;\n    letter-spacing: -1px;\n    color: #add4ff;\n}\n    @media (min-width: 900px) {\n      .news-card {\n        height: 20rem\n      }\n    }\n\n.news-card::before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgb(56 43 43 / 10%) linear-gradient(to bottom, rgb(1 19 62 / 69%) 50%, rgb(0 32 109) 77%);\n    z-index: 0;\n}\n\n    .news-card__card-link {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 1;\n    }\n\n    .news-card__image {\n      width: 100%;\n      height: 100%;\n      display: block;\n      object-fit: cover;\n      transition: transform 3s ease;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden;\n      position: relative;\n      z-index: -1;\n    }\n\n    .news-card__text-wrapper {\n      position: absolute;\n      bottom: 0rem;\n      padding: 1rem;\n      color: white;\n      transition: background-color 1.5s ease;\n      text-shadow: 2px 2px 2px black;\n    }\n\n    .news-card__title {\n      transition: color 1s ease;\n      margin-bottom: .5rem;\n    }\n\n    .news-card__post-date {\n      font-size: .7rem;\n      margin-bottom: .5rem;\n      color: #CCC;\n    }\n\n    .news-card__details-wrapper {\n      max-height: 0;\n      opacity: 0;\n      transition: max-height 1.5s ease, opacity 1s ease;\n    }\n\n    @media (min-width: 900px) {\n      .news-card:hover .news-card__details-wrapper {\n        max-height: 20rem;\n        opacity: 1;\n      }\n\n      .news-card:hover .news-card__text-wrapper {\n        background-color: rgba(0, 0, 0, 0.6);\n      }\n\n      .news-card:hover .news-card__title {\n        color: white;\n      }\n\n      .news-card:hover .news-card__image {\n        transform: scale(1.2);\n        z-index: -1;\n      }\n    }\n\n    .news-card__excerpt {\n      font-weight: 300;\n    }\n\n    .news-card__read-more {\n    background: #737373;\n    color: #fff;\n    display: block;\n    padding: 0.4rem 0.6rem;\n    border-radius: 0.3rem;\n    margin-top: 1rem;\n    border: 1px solid #656565;\n    font-size: 1rem;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    text-decoration: none;\n    width: 7rem;\n    margin-left: auto;\n    position: relative;\n    z-index: 5;\n    text-shadow: none;\n    font-family: arial black;\n    letter-spacing: -1px;\n\n    }\n\n    .news-card__read-more i {\n      position: relative;\n      left: 0.2rem;\n      color: #888;\n      transition: left 0.5s ease, color 0.6s ease;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden;\n    }\n\n    .news-card__read-more:hover i {\n      left: 0.5rem;\n      color: yellow;\n    }\n\n    /* Placeholder Animation Styles */\n    .placeholder-content {\n      overflow: hidden;\n      background: #000;\n      position: relative;\n      -webkit-animation-duration: 0.7s;\n      animation-duration: 0.7s;\n      -webkit-animation-fill-mode: forwards;\n      animation-fill-mode: forwards;\n      -webkit-animation-iteration-count: infinite;\n      animation-iteration-count: infinite;\n      -webkit-animation-timing-function: linear;\n      animation-timing-function: linear;\n      -webkit-animation-name: placeholderAnimate;\n      animation-name: placeholderAnimate;\n      background: #f6f7f8;\n      background: linear-gradient(to right, #e6e6e6 2%, #eee 18%, #f6f8fa 33%);\n      background-size: 1300px;\n    }\n\n    .placeholder-content_item {\n      width: 100%;\n      height: 20px;\n      position: absolute;\n      background: #fff;\n      z-index: 2;\n    }\n\n    .placeholder-content_item:after, .placeholder-content_item:before {\n      width: inherit;\n      height: inherit;\n      content: "";\n      position: absolute;\n    }\n\n    .placeholder-content_item:nth-child(1) {\n      top: 135px;\n      left: 0;\n      bottom: 0;\n      width: 200px;\n      height: auto;\n    }\n\n    /* Add more placeholder styles as needed */\n\n    @-webkit-keyframes placeholderAnimate {\n      0% {\n        background-position: -650px 0;\n      }\n      100% {\n        background-position: 650px 0;\n      }\n    }\n\n    @keyframes placeholderAnimate {\n      0% {\n        background-position: -650px 0;\n      }\n      100% {\n        background-position: 650px 0;\n      }\n    }\n\n  .content-hidden {\n  display: none;\n}\nh2.news-card__title {\n    font-family: arial black;\n    line-height: 1;\n    font-size: 1.4rem;\n}\n   /* width */\n   ::-webkit-scrollbar {\n   width: 4px;\n   }\n   /* Track */\n   ::-webkit-scrollbar-track {\n   background: #f1f1f1;\n   }\n   /* Handle */\n   ::-webkit-scrollbar-thumb {\n   background: #007bff;\n   }\n   /* Handle on hover */\n   ::-webkit-scrollbar-thumb:hover {\n   background: #52a5ff;\n   }\n.custom-dropdown {\n    appearance: none;\n    background-color: transparent;\n    border: none;\n    padding: 10px;\n    font-size: 37px;\n    font-family: arial black;\n    outline: none;\n    cursor: pointer;\n    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;\n    border-bottom: 0px solid #062776;\n    margin: 0 auto;\n    position: sticky;\n    left: 82%;\n    width:200px;\n    margin-right: -190px;\n    top: 0;\n    z-index: 9999;\n    color: #027bff;\n    box-shadow: 0px 1px 1px 0px rgb(0 48 100 / 19%);\n    max-width: 600px;\n    text-align: right;\n    margin-bottom: 17px;\n    letter-spacing: -2px;\n}\n\n/* Custom styles for the dropdown arrow */\n.custom-dropdown::after {\n  content: "▼"; /* Unicode down arrow */\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n  pointer-events: none; /* Ensure the arrow doesn\'t interfere with the select */\n}\n\n/* Hover effect for the dropdown */\n.custom-dropdown:hover {\n    background-color: #f2f2f200;\n    transform: translateY(-2px);\n    color: white;\n}\n\n/* Rotate the arrow when the dropdown is open */\n.custom-dropdown.select-open::after {\n  transform: translateY(-50%) rotate(180deg);\n}\n\n/* Style the dropdown options */\n.custom-dropdown option {\n  background-color: #fff;\n  color: #333;\n  font-size: 16px;\n}\n\n/* Hover effect for the dropdown options */\n.custom-dropdown option:hover {\n  background-color: #007bff;\n  color: #fff;\n}\nThis CSS will give the blue border a soft glow effect when you hover over the dropdown, creating a visually appealing interaction.\n\n\n\n\n\n\n\n  '
    }}
  />
  <div className="preloader">Loading...</div>
  <div
    style={{
      maxWidth: 500,
      margin: "0 auto",
      textAlign: "center",
      width: "100%",
      position: "absolute",
      left: "50%",
      marginLeft: "-250px",
      top: 24
    }}
  >
    <dotlottie-player
      src="https://lottie.host/f911d55d-f09e-45c3-9f19-da58a68cbdfb/dQ28N21ilM.json"
      background="transparent"
      speed={1}
      style={{ width: "100%", height: "100%" }}
      loop=""
      autoPlay=""
    />
    <a href="https://1kochi.com" title="1Kochi.com Home">
      <img
        src="https://cms.1arabia.com/1kochi-logo-main.png?34d534"
        title="1Kochi - Unveiling Kochi's Essence"
        className="k1-logo"
        style={{ height: "auto", maxWidth: 420, width: "100%" }}
      />
    </a>
  </div>
  {/* <input type="text" id="search-input" placeholder="Search...">*/}
  <select id="category-filter" className="custom-dropdown">
    <option value="all"> /All</option>
    {/* Add more options based on extracted categories */}
  </select>{" "}
  <div className="content-item" data-category="Local">
    <div>
      <div className="wrapper">
        <div
          className="kads1"
          style={{
            float: "left",
            position: "absolute",
            left: "50%",
            marginLeft: "-364px",
            top: 166,
            maxWidth: 728,
            width: "100%",
            height: 90,
            border: "1px solid #bcbcbc69",
            textAlign: "center",
            lineHeight: "5.59",
            fontFamily: "arial",
            color: "#799bc6"
          }}
        >
          Advertise
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n@media only screen and (max-width: 700px) {\nimg.k1-logo { display: none; } \n}\n\n@media only screen and (max-width: 1400px) {\n.kads1 {\n left:54% !important;\n}\n   \n}\n\n@media only screen and (max-width: 1300px) {\n.kads1 {\n  left:54% !important;\n\n}\n   \n}\n\n@media only screen and (max-width: 1280px) {\n.kads1 {\n display:none !important;\n}\n   \n}\n"
          }}
        />
        <div className="panel">
          <h2 className="city" id="city" />
          <div className="weather" id="weather">
            <div className="group secondary">
              <h3 id="dt" />
              <h3 id="description" />
            </div>
            <div className="group secondary">
              <h3 id="wind" />
              <h3 id="humidity" />
            </div>
            <div className="temperature" id="temperature">
              <h1 className="temp" id="temp">
                <i id="condition" /> <span id="num" />
                <a className="fahrenheit active" id="fahrenheit" href="#">
                  °F
                </a>
                <span className="divider secondary">|</span>
                <a className="celsius" id="celsius" href="#">
                  °C
                </a>
              </h1>
            </div>
            <div className="forecast" id="forecast" />
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n@import url('https://fonts.googleapis.com/css?family=Roboto:400,300,100');\n@import url('https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.3.2/css/weather-icons.min.css');\n\nh1,\nh2,\nh3,\nh4 {\n  color: white;\n  font-family: 'Roboto';\n  font-weight: 100;\n  line-height: 1.1;\n  letter-spacing: 0.025em;\n  margin: 0; padding: 0;\n}\na {\n  color: white;\n  opacity: 0.54;\n  text-decoration: none;\n}\na:hover,\n.active {opacity: 1;}\n\n.wrapper {\nwidth: 100%;\n    margin: 0 auto;\n    max-width: 93%;\n}\n.searchbar,\n.button {\n  height: 45px;\n  margin: 1em 0 4em;\n  padding: 0;\n  font: 400 1rem 'Roboto';\n  letter-spacing: 0.025em;\n  text-transform: uppercase;\n  color: white;\n  border: none;\n}\n.searchbar {\n  float: left;\n  width: 380px;\n  border-bottom: solid thin white;\n  color: #E8E8E8;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.searchbar::-webkit-input-placeholder {color: white; opacity: 0.35;}\n.searchbar::-moz-placeholder {color: white; opacity: 0.35;}\n.searchbar:-ms-input-placeholder {color: white; opacity: 0.35;}\n.searchbar:-moz-placeholder {color: white; opacity: 0.35;}\n\n.button:focus,\n.searchbar:focus {outline: none; color: white;}\n.searchbar:focus::-webkit-input-placeholder {color: white; opacity: 0.7;}\n.searchbar:focus::-moz-placeholder {color: white; opacity: 0.7;}\n.searchbar:focus:-ms-input-placeholder {color: white; opacity: 0.7;}\n.searchbar:focus:-moz-placeholder {color: white; opacity: 0.7;}\n\n.button {\n  float: right;\n  width: 100px;\n}\n.panel {\n  width: 100%;\n  display: inline-block;\n}\n.weather {\n  width: 100%;\n  margin-top: 20px;\n  display: inline-block;\n}\n.city {\n  text-align: left;\n  border-bottom: solid thin white;\n  text-transform: uppercase;\n  color: #E8E8E8;\n  color: rgba(255, 255, 255, 0.7);\n}\n.group {\n  width: 165px;\n  margin-bottom: 20px;\n  text-align: right;\n  float: right;\n  clear: both;\n}\n.temp {\n  font-size: 4.5em;\n  font-weight: 300;\n  line-height: 0.75;\n}\n.celsius,\n.fahrenheit,\n.divider {\n  font-size: 1.75rem;\n  vertical-align: super;\n}\n.divider {\n  margin: 0 0.05em;\n}\n.forecast {\n  display: table;\n  text-transform: uppercase;\n  width: 100%;\n}\n.block {\n  display: table-cell;\n  padding: 1.5em 0 0 0;\n  text-align: center;\n}\n.high {\n  font-weight: 300;\n  margin: 0.25em 0;\n}\n\n.secondary {opacity: 0.7;}\n.transparent {background: transparent;}\n.hot {background: transparent;}\n.warm {background: transparent;}\n.cool {background: transparent;}\n.cold {background: transparent;}\n.color404 {background: transparent;}\n.button-hot {background: #BF360C;}\n.button-warm {background: #B34E00;}\n.button-cool {background: #0D47A1;}\n.button-cold {background: #1A237E;}\n.button404 {background: black;}\n"
          }}
        />
      </div>
    </div>
    <div className="content-wrapper"></div>
  </div>
</>


        </>
    )
}

export default Header

/*
    app.js
    our application code

    Alternative fuel locations in Chicago dataset:
    https://data.cityofchicago.org/resource/alternative-fuel-locations.json

    Chicago coordinates:
    lat: 41.8369
    lng: -87.6847
 */

"use strict";

$(document).ready(function() {
   var mapElem = document.getElementById('map');
    var center = {
        lat: 41.8369,
        lng: -87.6847
    };

    var map = new google.maps.Map(mapElem, {
        center: center,
        zoom: 12

    }); // elem which you want map to appear, and the center and zoom level
});
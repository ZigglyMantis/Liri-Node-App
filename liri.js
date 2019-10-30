require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var Sportify = require("node-spotify-api")
var fs = require("fs")
var moment = require("moment")
var axios = require("axios")

var command = process.argv[2]
var input = process.argv.slice(3).join(" ")

// execute liri function off bat
// switch cases for movie this or spotify this or band this

// if command this then switch case for all this commands


// build functions off the switch

// call apis during functions
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify);
var fs = require("fs")
var moment = require("moment")
var axios = require("axios")

var command = process.argv[2]
var input = process.argv.slice(3).join(" ")

// switch cases for movie this or spotify this or band this
function liriBot(){
    switch (command) {
        case "concert-this":
            //search for artist band name using bands in town
            concertThis();
            break;
        case "spotify-this-song":
            //search for song using spotify
            spotifyThis();
            break;
        case "movie-this":
            //search for movie using omdb
            movieThis();
            break;
        case "do-what-it-says":
            //use fs to pull data from random.txt and run it as a -this command.
            doThis();
            break;

        default:
            console.log("You did not enter a valid command")
            break;
    }

    function concertThis(){
    var artist = input
    // console.log(input)
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
        axios.get(URL).then(function(response){
            var jsonData = response.data[0];
            // console.log(response.data[0])
            var correctedDate = moment(jsonData.datetime, "YYYY-MM-DD").format("MM/DD/YYYY")
            var artistData = [
                "Venue: " + jsonData.venue.name,
                "Location: " + jsonData.venue.country + ", "+ jsonData.venue.region + ", " + jsonData.venue.city,
                "Date: " + correctedDate
            ]
            console.log(artistData)
        });
    }

    

    var getArtistNames = function (artist) {
        return artist.name;
    };
    
    // Function for running a Spotify search - Command is spotify-this-song
    function spotifyThis(songName) {
        if (songName === undefined) {
            songName = "What's my age again";
        }
    
        spotify.search(
            {
                type: "track",
                query: input
            },
            function (err, data) {
                if (err) {
                    console.log("Error occurred: " + err);
                    return;
                }
    
                var songs = data.tracks.items;
    
                for (var i = 0; i < songs.length; i++) {
                    console.log(i);
                    console.log("artist(s): " + songs[i].artists.map(getArtistNames));
                    console.log("song name: " + songs[i].name);
                    console.log("preview song: " + songs[i].preview_url);
                    console.log("album: " + songs[i].album.name);
                    console.log("-----------------------------------");
                }
            }
        );
    };
    
    function movieThis(){
        var movie = input
        omdbKey = keys.omdb
        console.log(movie)
        var URL = "https://www.omdbapi.com/?t=" + movie + "&apikey=" + omdbKey
        axios.get(URL).then(function(response){
            var jsonData = response.data
            console.log(jsonData)
            var movieData = [
                "Title: ",
                "Year released: ",
                "IMDB Rating: ",
                "Rotten Tomatoes Rating: ",
                "Country of production: ",
                "Language: ",
                "Plot: ",
                "Cast: ",
            ]
            console.log(movieData)
        });
        
    }
}
// Switch functions



// call apis during functions
// execute liri
liriBot();
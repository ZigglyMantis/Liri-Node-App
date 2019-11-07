# Liri-Node-App

This app was created in order to quickly find concerts, movies, and songs all with some simple commands.

the app is split into 4 parts

Part 1:
  concert-this
    allows the user to find bands and venues depending on the artist search term
    
Part 2:
  spotify-this-song
    allows the user to search for a song using Spotify's API
    
Part 3:
  movie-this
    allows the user to search for a specific movie using OMDB's API
    
Part 4:
  do-this
    this function reads the random.txt file and executes the command within
    
running the app is rather simple

first you will need your own API key for the API's
then you will need to use npm to install the dependencies
after all of that is taken care of you may begin using the app

the app is using a command and input structure

you need to enter Node then followed by the file name, in this case Liri.js and then followed by the command and then search term

Example of a command:
node ./liri.js spotify-this-song through the fire and flames

no need to worry about spaces for the search term as there is a function that concatinates and splits it withing a string.

I created this top to bottom.

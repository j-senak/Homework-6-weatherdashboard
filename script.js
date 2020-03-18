// Start with a document.ready function
// Using Section 6 Activity 7 as a guide
$(document).ready(function() {

// make a variable to store the cards being added from search button
    var cityCards = [];

//Display cities typed
function renderCityButton () {

    // Make sure to delete re-entered cities
    $("#city-view").empty();
    
    // Make  for loop that populates the entered cities
    for (var i = 0; i < cityCards.length; i++) {

        // Dynamically generate the city forms and prepend them to the list
        var cityList = $("<button>");
        cityList.addClass("city");
        cityList.attr("data-name", cityCards[i]);
        cityList.text(cityCards[i]);
        $("#city-view").prepend(cityList);
    }
}
// This function will take the user input to post
$("#submit-city").on("click", function(event) {
    event.preventDefault();
    var cityInput = $("city-view").val();
    cityCards.push(cityInput);
    renderCityButton(); 

    // Now we can set up API calls
// I am following the Section 6 Activity 5 activity for references
// Getting a 401 Error and I dont know why. From what I saw, it should be lack of authentication, but I have had this keys for a week. Can't test the calls to see if they work.

var apiKey = "fc64461d85b0e0f75364a4b9c7b81210";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + apiKey;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
 //  https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
    var currentDate = new Date(response.dt * 1000).toLocaleDateString("en-US");
    $(".city").html("<h1>" + response.name + " - " + currentDate + "</h1>");
    var tempF = (response.main.temp - 273.15) * 1.8 + 32;
    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
    $(".humidity").text("Humidity: " + response.main.temp);
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".uvIndex").text("UV Index: " + response.uv.index);
});



});




});
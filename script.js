// Start with a document.ready function
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
    var cityInput = $("city-view").val("");
    cityCards.push(cityInput);
    renderCityButton();

});







});
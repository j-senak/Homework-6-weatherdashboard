// Start with a document.ready function
$(document).ready(function() {

// make a variable to store the cards being added from search button
    var cityCards = [];

//Display cities typed
function renderCityForm () {

    // Make sure to delete re-entered cities
    $("#city-view").empty();
    
    // Make  for loop that populates the entered cities
    for (var i = 0; i < cityCards.length; i++) {

        // Dynamically generate the city forms and prepend them to the list
        var cityList = $("<form>");
        cityForm.addClass("city");
        cityForm.attr("data-name", cityCard[i]);
        cityForm.text(cityCards[i]);
        $("#city-view").prepend(cityForm);
    }
} 

// This function will take the user input to post
$("#search-btn").on("click", function(event) {
    event.preventDefault();
    var cityInput = $("search").val().trim();
    cityCards.push(cityInput);
    renderCityForm();

});







});
// Super messy, but my attempt at homepage-javascript.

// Select DOM elements
var formEl = document.getElementById('search-form');
var resultsEl = document.getElementById('results');
var optionEl = document.getElementById('option');

// Handle form submit
formEl.addEventListener('submit', function(event) {
    // Prevent default form submit
    event.preventDefault();

    var search = searchInput.value.trim();

    if (search) {
        getResults(search);
    }

});

var buttonClickHandler = function (event) {
    var option = event.target.getAttribute('data-option');
  
    if (option) {
      getResults(option);
  
      resultsContainerEl.textContent = "";
    }
};
  

var getResults = function(option) {
  var apiURL = "https://loc.gov/search/?q=" + query + "&fo=" + format;

  // Make API request
  fetch(apiURL)
    .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {

      }
    }
  }



optionButtonsEl.addEventListener('click', function(event) {
    var option = event.target.getAttribute('data-option');

    if (option) {
        getOptionResults(option);

        libraryContainerEl.textContent = "";
    }


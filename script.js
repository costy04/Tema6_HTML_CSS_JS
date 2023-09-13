
// Definirea unui array static cu destinații
var destinations = ["Bucuresti", "Contanta", "Timisoara", "Brasov", "Sibiu"];

// Obținerea referințelor la dropdown-uri
var leaveFromDropdown = document.getElementById("leaveFrom");
var toDropdown = document.getElementById("to");

// Popularea dropdown-ului "Leave From"
for (var i = 0; i < destinations.length; i++) {
    var option = document.createElement("option");
    option.text = destinations[i];
    leaveFromDropdown.add(option);
}

// Popularea dropdown-ului "To"
for (var i = 0; i < destinations.length; i++) {
    var option = document.createElement("option");
    option.text = destinations[i];
    toDropdown.add(option);
}

// Inițializarea datepicker-ului
$( "#datepicker" ).datepicker();


$(".pulse").click(function() {
    // Get all accommodation elements
    var accommodations = $(".destination-cell");

    // Hide all accommodations
    accommodations.hide();

    // Generate a random number of accommodations to display
    var randomCount = Math.floor(Math.random() * accommodations.length) + 1;

    // Create an array of unique random indexes
    var randomIndexes = [];
    while (randomIndexes.length < randomCount) {
        var randomIndex = Math.floor(Math.random() * accommodations.length);
        if (randomIndexes.indexOf(randomIndex) === -1) {
            randomIndexes.push(randomIndex);
        }
    }

    // Display the randomly selected accommodations
    randomIndexes.forEach(function(index) {
        accommodations.eq(index).show();
    });
});

const copyright = document.getElementById("copyright");
const body = document.body;
const jokerImage = document.createElement("img");

jokerImage.src = "https://i.pinimg.com/550x/90/c9/d3/90c9d327f794b9e6be7c1dfc1aec8fa7.jpg"; // Înlocuiți cu calea corectă către imaginea lui Joker

copyright.addEventListener("dblclick", function() {
    body.innerHTML = ''; // Golim întregul conținut al paginii
    body.appendChild(jokerImage); // Adăugăm imaginea lui Joker în locul conținutului anterior
});



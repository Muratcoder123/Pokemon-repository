/*fetch('pokemon.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayPokemonCards(data)
    });

*/

$(document).ready(function() {
    $.get("https://uyghur.ai/course/data/pokemon.json", function(data, status) {
      displayPokemonCards(data);
    });
    

function displayPokemonCards(pokemonData) {
    let pokemonDiv = document.getElementById("pokemonContainer");
    let rows = pokemonData.length / 6;
    let bgType = " ";
    for (let eachRow = 0; eachRow < rows; eachRow++) {
        let rowId = "row" + eachRow;
        pokemonDiv.innerHTML += "<div class='row' id='" + rowId + "'></div>";

        for (let i = 0; i < 6; i++) {
            let currentIndex = eachRow * 6 + i;
            if (pokemonData[currentIndex].type[0] == 'Water') {
                bgType = "water-type";
            } else if (pokemonData[currentIndex].type[0] == 'Fire') {
                bgType = "fire-type";
            } else if (pokemonData[currentIndex].type[0] == 'Grass') {
                bgType = "grass-type";
            } else if (pokemonData[currentIndex].type[0] == 'Electric') {
                bgType = "electric-type";
            } else if (pokemonData[currentIndex].type[0] == 'Bug') {
                bgType = "bug-type";
            } else if (pokemonData[currentIndex].type[0] == 'Ghost') {
                bgType = "ghost-type";
            } else if (pokemonData[currentIndex].type[0] == 'Normal') {
                bgType = "normal-type";
            } else if (pokemonData[currentIndex].type[0] == 'Psychic') {
                bgType = "psychic-type";
            } else if (pokemonData[currentIndex].type[0] == 'Dragon') {
                bgType = "dragon-type";
            } else if (pokemonData[currentIndex].type[0] == 'Ice') {
                bgType = "ice-type";
            } else if (pokemonData[currentIndex].type[0] == 'Poison') {
                bgType = "poison-type";
            } else if (pokemonData[currentIndex].type[0] == 'Ground') {
                bgType = "ground-type";
            } else if (pokemonData[currentIndex].type[0] == 'Rock') {
                bgType = "rock-type";
            } else if (pokemonData[currentIndex].type[0] == 'Fighting') {
                bgType = "fighting-type";
            } else {
                bgType = " ";
            }
            if (pokemonData[currentIndex] != null || pokemonData[currentIndex] != undefined) {
                document.getElementById(rowId).innerHTML +=
                    "<div class='col-2'>" +
                    "<div class='card h-100 " + bgType + " '>" +
                    "<img src='" + pokemonData[currentIndex].img + "' onclick='pokemonSayHello(" + JSON.stringify(pokemonData[currentIndex]) + ")' class='card-img-top'>" +
                    //"<img src='" + pokemonData[currentIndex].img + "'  class='card-img-top'>" +
                    "<div class='card-body'>" +
                    "<p class='card-text'></p></div>" +
                    "<div class='card-footer card-text'>" + pokemonData[currentIndex].name + "</div>" +
                    "</div></div>";
            }
        }
    }
}



function loadPokemonInfo(pokemon) {
  let alertText = "";
    if (pokemon != null || pokemon != undefined) {
        alertText = "Hi, I'm " + pokemon.name + "! My type(s): " + pokemon.type;
    }

    alert(alertText);
}

function pokemonSayHello(pokemon) {
    alert("Hi, I'm " + pokemon.name + " I'm " + pokemon.type + " type.");
}

    $("#hide-type").click(function() {
        let selectedType = $('#pokemonTypeOption :selected').text();
        if (selectedType == "Water") {
            $(".water-type").fadeOut();
        } else if (selectedType == "Fire") {
            $(".fire-type").fadeOut();
        } else if (selectedType == "Grass") {
            $(".grass-type").fadeOut();
        } else if (selectedType == "Normal") {
            $(".normal-type").fadeOut();
        } else if (selectedType == "Psychic") {
            $(".psychic-type").fadeOut();
        } else if (selectedType == "Ghost") {
            $(".ghost-type").fadeOut();
        } else if (selectedType == "Bug") {
            $(".bug-type").fadeOut();
        } else if (selectedType == "Dragon") {
            $(".dragon-type").fadeOut();
        } else if (selectedType == "Ground") {
            $(".ground-type").fadeOut();
        } else if (selectedType == "Poison") {
            $(".poison-type").fadeOut();
        } else if (selectedType == "Electric") {
            $(".electric-type").fadeOut();
        } else if (selectedType == "Rock") {
            $(".rock-type").fadeOut();
        } else if (selectedType == "Fighting") {
            $(".fighting-type").fadeOut();
        } else if (selectedType == "Ice") {
            $(".ice-type").fadeOut();
        } else {
        alert("Please select a type!");
        }
    });

    $("#show-type").click(function() {
        let selectedType = $('#pokemonTypeOption :selected').text();
        if (selectedType == "Water") {
            $(".water-type").fadeIn();
        } else if (selectedType == "Fire") {
            $(".fire-type").fadeIn();
        } else if (selectedType == "Grass") {
            $(".grass-type").fadeIn();
        } else if (selectedType == "Normal") {
            $(".normal-type").fadeIn();
        } else if (selectedType == "Psychic") {
            $(".psychic-type").fadeIn();
        } else if (selectedType == "Ghost") {
            $(".ghost-type").fadeIn();
        } else if (selectedType == "Bug") {
            $(".bug-type").fadeIn();
        } else if (selectedType == "Dragon") {
            $(".dragon-type").fadeIn();
        } else if (selectedType == "Ground") {
            $(".ground-type").fadeIn();
        } else if (selectedType == "Poison") {
                $(".poison-type").fadeIn();
        } else if (selectedType == "Electric") {
                $(".electric-type").fadeIn();
        } else if (selectedType == "Rock") {
                $(".rock-type").fadeIn();
        } else if (selectedType == "Fighting") {
                $(".fighting-type").fadeIn();
        } else if (selectedType == "Ice") {
                $(".ice-type").fadeIn();
        } else {
            alert("Please select a type!");
        }
    
    });

  });
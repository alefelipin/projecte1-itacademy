"use strict"

const mobileSearchInput = document.getElementById("mobile-search-alumni");
const mobileSearchAlumni = mobileSearchInput.value.toUpperCase();

const desktopSearchInput = document.getElementById("desktop-search-alumni")
const desktopSearchAlumni = desktopSearchInput.value.toUpperCase();

const alumniCards = document.getElementsByClassName("networking-card");

// networking-desktop-search-field





desktopSearchInput.addEventListener("input", function() {

  for (let i = 0; i < cardText.length; i++ ) {

    const cardText = alumniCards[i].textContent.toUpperCase();

    console.log(cardText);

    if ( cardText.includes(desktopSearchInput) ) {
      alumniCards[i].style.display = "";
    } else {
      alumniCards[i].style.display = "none";
    }
  }

});




mobileSearchInput.addEventListener("input", function () {

  for (let i = 0; i < alumniCards.length; i++) {

    const cardText = alumniCards[i].textContent.toUpperCase();

    console.log(cardText);

    if ( cardText.includes(mobileSearchAlumni) ) {
      alumniCards[i].style.display = "";
    } else {
      alumniCards[i].style.display = "none";
    }
  }

});













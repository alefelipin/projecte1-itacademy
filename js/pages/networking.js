"use strict"

const mobileSearchInput = document.getElementById("mobile-search-alumni");
const desktopSearchInput = document.getElementById("desktop-search-alumni");

const alumniCards = document.getElementsByClassName("networking-card");


mobileSearchInput.addEventListener("input", function () {

  const mobileSearchAlumni = mobileSearchInput.value.toUpperCase();

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

desktopSearchInput.addEventListener("input", function() {

  const desktopSearchAlumni = desktopSearchInput.value.toUpperCase();

  for (let i = 0; i < alumniCards.length; i++ ) {

    const cardText = alumniCards[i].textContent.toUpperCase();

    if ( desktopSearchAlumni == "") {
      alumniCards[i].style.display = "";
    } else if ( cardText.includes(desktopSearchAlumni) ) {
      alumniCards[i].style.display = "flex";
    } else {
      alumniCards[i].style.display = "none";
    }
  }

});















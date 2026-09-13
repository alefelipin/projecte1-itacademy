"use strict";

const mobileSearchInput = document.getElementById("mobile-search-alumni");
const desktopSearchInput = document.getElementById("desktop-search-alumni");

const alumniCards = document.getElementsByClassName("networking-card");

function filterAlumni(event) {

  const searchText = event.target.value.trim().toUpperCase();
  const isDesktopSearch = event.target.id === "desktop-search-alumni";

  for (let i = 0; i < alumniCards.length; i++) {

    const cardText = alumniCards[i].textContent.toUpperCase();

    if (searchText === "") {

      alumniCards[i].style.display = "";

    } else if ( cardText.includes(searchText) ) {

      alumniCards[i].style.display = isDesktopSearch ? "flex" : "";

    } else {

      alumniCards[i].style.display = "none";

    }
  }
}

mobileSearchInput.addEventListener("input", filterAlumni);
desktopSearchInput.addEventListener("input", filterAlumni);
















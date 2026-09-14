"use strict";

const networkingCardsContainer =
  document.getElementById("networking-cards-container");

function renderAlumniCards() {

  alumniData.forEach(alumni => {

    networkingCardsContainer.innerHTML += `
      <article class="networking-card">

        <div class="networking-card-info">

          <h2 class="networking-card-name">
            ${alumni.name}
          </h2>

          <p class="networking-card-text networking-card-year">
            ${alumni.year}
          </p>

          <p class="networking-card-text networking-card-job">
            ${alumni.job}
          </p>

          <p class="networking-card-location">
            ${alumni.location}
          </p>

          <button
            class="btn btn--rounded btn--colored-dark btn--font-small networking-card-button desktop-only"
            type="button"
          >
            ${alumni.buttonText}
          </button>

        </div>

        ${
          alumni.image
            ? `
              <img
                class="networking-card-image"
                src="${alumni.image}"
                alt="${alumni.name}"
              >
            `
            : ""
        }

      </article>
    `;

  });

}

renderAlumniCards();

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
















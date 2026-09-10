"use strict"

const industrySelect = document.getElementById("select-industry");
const experienceSelect = document.getElementById("select-experience");

const alumniCardsMobile = document.getElementsByClassName("job-opportunities-card");
const alumniCardsDesktop = document.getElementsByClassName("job-opportunities-desktop-card");

function filterJobsByIndustry() {

  const industrySearchText = industrySelect.value.toUpperCase();

  for (let i = 0; i < alumniCardsMobile.length; i++) {

    const cardTextMobile = alumniCardsMobile[i].textContent.toUpperCase();

    if ( cardTextMobile.includes(industrySearchText) ) {
      alumniCardsMobile[i].style.display = "";
    } else {
      alumniCardsMobile[i].style.display = "none";
    }

  }

  for (let j = 0; j < alumniCardsDesktop.length; j++) {

    const cardTextDesktop = alumniCardsDesktop[j].textContent.toUpperCase();

    if ( cardTextDesktop.includes(industrySearchText) ) {
      alumniCardsDesktop[j].style.display = "";
    } else {
      alumniCardsDesktop[j].style.display = "none";
    }

  }

}

function filterJobsByExperience() {

  const experienceSearchText = experienceSelect.value.toUpperCase();

  for (let i = 0; i < alumniCardsMobile.length; i++) {

    const cardTextMobile = alumniCardsMobile[i].textContent.toUpperCase();

    if ( cardTextMobile.includes(experienceSearchText) ) {
      alumniCardsMobile[i].style.display = "";
    } else {
      alumniCardsMobile[i].style.display = "none";
    }

  }

  for (let j = 0; j < alumniCardsDesktop.length; j++) {

    const cardTextDesktop = alumniCardsDesktop[j].textContent.toUpperCase();

    if ( cardTextDesktop.includes(experienceSearchText) ) {
      alumniCardsDesktop[j].style.display = "";
    } else {
      alumniCardsDesktop[j].style.display = "none";
    }

  }

}

industrySelect.addEventListener("change", filterJobsByIndustry);
experienceSelect.addEventListener("change", filterJobsByExperience);


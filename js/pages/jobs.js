"use strict"

const industrySelectMobile = document.getElementById("select-industry-mobile");
const experienceSelectMobile = document.getElementById("select-experience-mobile");

const industrySelectDesktop = document.getElementById("select-industry-desktop");
const experienceSelectDesktop = document.getElementById("select-experience-desktop");

const alumniCardsMobile = document.getElementsByClassName("job-opportunities-card");
const alumniCardsDesktop = document.getElementsByClassName("job-opportunities-desktop-card");


function filterJobs() {

  const industrySearchTextM = industrySelectMobile.value.toUpperCase();
  const experienceSearchTextM = experienceSelectMobile.value.toUpperCase();
  const industrySearchTextD = industrySelectDesktop.value.toUpperCase();
    const experienceSearchTextD = experienceSelectDesktop.value.toUpperCase();

  for (let i = 0; i < alumniCardsMobile.length; i++) {

    const cardTextMobile = alumniCardsMobile[i].textContent.toUpperCase();

    const industryCheck = cardTextMobile.includes(industrySearchTextM);
    const experienceCheck = cardTextMobile.includes(experienceSearchTextM);

    console.log(cardTextMobile);

    if (industryCheck && experienceCheck) {
      alumniCardsMobile[i].style.display = "";
    } else {
      alumniCardsMobile[i].style.display = "none";
    }

  } 

  for (let j = 0; j < alumniCardsDesktop.length; j++) {


    const cardTextDesktop = alumniCardsDesktop[j].textContent.toUpperCase();

    const industryCheck = cardTextDesktop.includes(industrySearchTextD);
    const experienceCheck = cardTextDesktop.includes(experienceSearchTextD);

    if (industryCheck && experienceCheck) {
      alumniCardsDesktop[j].style.display = "";
    } else {
      alumniCardsDesktop[j].style.display = "none";
    }

  }

}

industrySelectMobile.addEventListener("change", filterJobs);
experienceSelectMobile.addEventListener("change", filterJobs);

industrySelectDesktop.addEventListener("change", filterJobs);
experienceSelectDesktop.addEventListener("change", filterJobs);


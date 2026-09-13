"use strict"

const industrySelectMobile = document.getElementById("select-industry-mobile");
const experienceSelectMobile = document.getElementById("select-experience-mobile");

const industrySelectDesktop = document.getElementById("select-industry-desktop");
const experienceSelectDesktop = document.getElementById("select-experience-desktop");

const jobCardsMobile = document.getElementsByClassName("job-opportunities-card");
const jobCardsDesktop = document.getElementsByClassName("job-opportunities-desktop-card");


function filterJobs(event) {

  const isDesktop = event.target.id.endsWith("-desktop");

  const industrySelect = isDesktop ? industrySelectDesktop : industrySelectMobile;
  
  const experienceSelect = isDesktop ? experienceSelectDesktop : experienceSelectMobile;

  const jobCards = isDesktop ? jobCardsDesktop: jobCardsMobile;

  const industrySearchText = industrySelect.value.toUpperCase();
  const experienceSearchText = experienceSelect.value.toUpperCase();

  for (let j = 0; j < jobCards.length; j++) {


    const cardText = jobCards[j].textContent.toUpperCase();

    const industryCheck = cardText.includes(industrySearchText);
    const experienceCheck = cardText.includes(experienceSearchText);

    if (industryCheck && experienceCheck) {

      jobCards[j].style.display = "";

    } else {

      jobCards[j].style.display = "none";
    }
  }
}

industrySelectMobile.addEventListener("change", filterJobs);
experienceSelectMobile.addEventListener("change", filterJobs);

industrySelectDesktop.addEventListener("change", filterJobs);
experienceSelectDesktop.addEventListener("change", filterJobs);


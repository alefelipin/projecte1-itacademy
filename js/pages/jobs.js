"use strict";

const jobsMobileContainer = document.getElementById("jobs-mobile-container");
const jobsDesktopContainer = document.getElementById("jobs-desktop-container");

function formatJobValue(value) {

  return value.charAt(0).toUpperCase() + value.slice(1);

}

function renderJobs() {

  jobsData.forEach(job => {

    jobsMobileContainer.innerHTML += `
      <article
        class="job-opportunities-card"
        data-industry="${job.industry}"
        data-experience="${job.experience}"
        data-stack="${job.stack}"
      >
        <div class="job-opportunities-card-left">

          <h2 class="job-opportunities-card-name">
            ${job.title}
          </h2>

          <p class="job-opportunities-card-text">
            ${job.description}
          </p>

          <p class="job-opportunities-card-text">
            Company: ${job.company}
          </p>

          <p class="job-opportunities-card-text">
            ${job.location}
          </p>

          <p class="job-opportunities-card-text">
            ${job.date}
          </p>

          <p class="job-opportunities-card-text">
            Industry: ${formatJobValue(job.industry)}
          </p>

          <p class="job-opportunities-card-text">
            Experience: ${formatJobValue(job.experience)}
          </p>

          <p class="job-opportunities-card-text">
            Stack: ${formatJobValue(job.stack)}
          </p>

          <button
            class="btn btn--white btn--font-xsmall jobs-btn--mobile"
            type="button"
          >
            ${job.buttonText}
          </button>

        </div>

        <div class="job-opportunities-card-right">

          <img
            class="job-opportunities-card-image"
            src="${job.image}"
            alt="${job.title}"
          >

        </div>
      </article>
    `;


    jobsDesktopContainer.innerHTML += `
      <article
        class="job-opportunities-desktop-card"
        data-industry="${job.industry}"
        data-experience="${job.experience}"
        data-stack="${job.stack}"
      >
        <div class="job-opportunities-desktop-card-info">

          <h3 class="job-opportunities-desktop-card-position">
            ${job.title}
          </h3>

          <p class="job-opportunities-desktop-card-text">
            ${job.description}
          </p>

          <p class="job-opportunities-desktop-card-text">
            Company: ${job.company}
          </p>

          <p class="job-opportunities-desktop-card-text">
            ${job.location}
          </p>

          <p class="job-opportunities-desktop-card-text">
            ${job.date}
          </p>

          <p class="job-opportunities-desktop-card-text">
            Industry: ${formatJobValue(job.industry)}
          </p>

          <p class="job-opportunities-desktop-card-text">
            Experience: ${formatJobValue(job.experience)}
          </p>

          <p class="job-opportunities-desktop-card-text">
            Stack: ${formatJobValue(job.stack)}
          </p>

          <button
            class="btn btn--white btn--font-xsmall jobs-btn--desktop"
            type="button"
          >
            ${job.buttonText}
          </button>

        </div>

        <div class="job-opportunities-desktop-card-right">

          <img
            class="job-opportunities-desktop-card-image"
            src="${job.image}"
            alt="${job.title}"
          >

        </div>
      </article>
    `;

  });

}

renderJobs();

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


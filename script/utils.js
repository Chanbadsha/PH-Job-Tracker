function getInnerText(id) {
  const innerText = document.getElementById(id).innerText;

  return innerText;
}

function displayCard(jobData, sectionName, statusSection) {
  let div = document.createElement("div");

  div.innerHTML = `<div class="card card-dash bg-base-100 w-full">
          <div class="card-body gap-3">
            <h2 class="companyName text-2xl font-semibold">
           ${jobData.companyName}
            </h2>
            <h4 class="text-xl position">${jobData.position}</h4>
            <div class="flex gap-3 text-base">
              <span class="location">${jobData.location}</span>
              <span class="type">${jobData.type}</span>
              <span class="salary">${jobData.salary}</span>
            </div>

            <div><button class="btn ${statusSection.bgColor} jobCardStatusBtn  text-white">${statusSection.status}</button></div>

            <p class="text-base description">
              ${jobData.description}
            </p>
            <div class="flex gap-2">
              <button
                id="interview-btn"

                class="btn interview text-green-400 font-semibold bg-white border-green-500 hover:bg-green-500 hover:text-white"
              >
                Interview
              </button>
              <button
                class="btn rejected text-red-400 font-semibold bg-white border-red-500 hover:bg-red-500 hover:text-white"
              >
                Rejected
              </button>
            </div>
          </div>
        </div>`;

  sectionName.appendChild(div);
}

function addHiddenClass() {
  allJobsSection.classList.remove("flex");
  allJobsSection.classList.add("hidden");

  interviewJobSection.classList.remove("flex");
  interviewJobSection.classList.add("hidden");

  rejectedJobSection.classList.remove("flex");
  rejectedJobSection.classList.add("hidden");
}

function removeHiddenClass(value) {
  value.classList.remove("hidden");
  value.classList.add("flex");
}

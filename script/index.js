let interViewJob = [];
let rejectedJob = [];

let jobCount = document.getElementById("job-count");
let totalJobNumberShow = document.getElementById("totalJobNumberShow");
let rejectedJobNumberShow = document.getElementById("rejectedJobNumberShow");
let interviewJobNumberShow = document.getElementById("interviewJobNumberShow");
let allJobBtn = document.getElementById("allJobBtn");
let interviewJobBtn = document.getElementById("interviewJobBtn");
let rejectedJobBtn = document.getElementById("rejectedJobBtn");
let interviewJobSection = document.getElementById("interviewJobSection");
let rejectedJobSection = document.getElementById("rejectedJobSection");
let allJobsSection = document.getElementById("allJobs");

function allJobCount(count) {
  const allJobs = document.getElementById("allJobs");

  if (count >= 0) {
    jobCount.innerText = count;
  } else {
    jobCount.innerText = allJobs.children.length;
  }

  totalJobNumberShow.innerText = allJobs.children.length;
  rejectedJobNumberShow.innerText = rejectedJob.length;
  interviewJobNumberShow.innerText = interViewJob.length;
}
allJobCount();

function interViewJobClick() {
  const jobData = document.getElementById("interview-btn");

  interViewJob = interViewJob.filter(
    (job) =>
      !(
        job.companyName == jobData.companyName &&
        job.position == jobData.position
      ),
  );

  // rejectedJob = rejectedJob.filter(
  //     (job) =>
  //       !(
  //         job.companyName == jobData.companyName &&
  //         job.position == jobData.position
  //       ),
  //   );
  allJobCount();
}

let allJobs = document.getElementById("allJobs");

allJobs.addEventListener("click", function (event) {
  const parentNode = event.target.parentNode.parentNode;
  console.log(parentNode);
  const companyName = parentNode.querySelector(".companyName").innerText;
  const position = parentNode.querySelector(".position").innerText;
  const location = parentNode.querySelector(".location").innerText;
  const type = parentNode.querySelector(".type").innerText;
  const salary = parentNode.querySelector(".salary").innerText;
  const description = parentNode.querySelector(".description").innerText;

  let jobCardStatusBtn = parentNode.querySelector(".jobCardStatusBtn");

  const jobData = {
    companyName,
    location,
    position,
    type,
    salary,
    description,
  };

  if (event.target.classList.contains("interview")) {
    let existJob;
    for (let job of interViewJob) {
      if (
        job.companyName == jobData.companyName &&
        job.position == jobData.position
      ) {
        existJob = true;
        break;
      }
    }

    if (!existJob) {
      interViewJob.push(jobData);
      jobCardStatusBtn.innerText = "Applied Job";
      jobCardStatusBtn.classList.remove("bg-red-500", "text-white");
      jobCardStatusBtn.classList.add("bg-green-500", "text-white");
      rejectedJob = rejectedJob.filter(
        (job) =>
          !(
            job.companyName == jobData.companyName &&
            job.position == jobData.position
          ),
      );
      allJobCount();
    }
  } else if (event.target.classList.contains("rejected")) {
    let existJob;
    for (let job of rejectedJob) {
      if (
        job.companyName == jobData.companyName &&
        job.position == jobData.position
      ) {
        existJob = true;
        break;
      }
    }

    if (!existJob) {
      rejectedJob.push(jobData);
      jobCardStatusBtn.innerText = "Rejected Job";
      jobCardStatusBtn.classList.remove("bg-green-500", "text-white");
      jobCardStatusBtn.classList.add("bg-red-500", "text-white");
      interViewJob = interViewJob.filter(
        (job) =>
          !(
            job.companyName == jobData.companyName &&
            job.position == jobData.position
          ),
      );
      allJobCount();
    }
  }
});

//Toggle Job Status btn
function toggleBtn(id) {
  allJobBtn.classList.remove("btn-primary");
  interviewJobBtn.classList.remove("btn-primary");
  rejectedJobBtn.classList.remove("btn-primary");

  let selectedBtn = document.getElementById(id);
  selectedBtn.classList.add("btn-primary");

  if (id === "allJobBtn") {
    allJobCount();
    allJobsSection.classList.remove("hidden");
    allJobsSection.classList.add("flex");

    rejectedJobSection.classList.remove("flex");
    rejectedJobSection.classList.add("hidden");

    interviewJobSection.classList.remove("flex");
    interviewJobSection.classList.add("hidden");
  }

  if (id === "interviewJobBtn") {
    allJobCount(interViewJob.length);
    allJobsSection.classList.remove("flex");
    allJobsSection.classList.add("hidden");

    rejectedJobSection.classList.remove("flex");
    rejectedJobSection.classList.add("hidden");

    interviewJobSection.classList.remove("hidden");
    interviewJobSection.classList.add("flex");

    if (interViewJob.length > 0) {
      interviewJobSection.replaceChildren();

      interViewJob.forEach((jobData) => {
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

            <div><button class="btn jobCardStatusBtn bg-green-500 text-white">Applied Job</button></div>

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

        interviewJobSection.appendChild(div);
      });
    } else {
      let div = document.createElement("div");

      interviewJobSection.replaceChildren();
      div.innerHTML = "<h1>No Data Show</h1>";
      interviewJobSection.appendChild(div);
    }
  }

  if (id === "rejectedJobBtn") {
    allJobCount(rejectedJob.length);
    allJobsSection.classList.remove("flex");
    allJobsSection.classList.add("hidden");

    interviewJobSection.classList.remove("flex");
    interviewJobSection.classList.add("hidden");

    rejectedJobSection.classList.remove("hidden");
    rejectedJobSection.classList.add("flex");
    console.log(rejectedJob.length);
    if (rejectedJob.length > 0) {
      rejectedJobSection.replaceChildren();
      rejectedJob.forEach((jobData) => {
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

            <div><button class="btn jobCardStatusBtn bg-red-500 text-white">Rejected Job</button></div>

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

        rejectedJobSection.appendChild(div);
      });
    } else {
      let div = document.createElement("div");

      rejectedJobSection.replaceChildren();
      div.innerHTML = "<h1>No Data Show</h1>";
      rejectedJobSection.appendChild(div);
    }
  }
}

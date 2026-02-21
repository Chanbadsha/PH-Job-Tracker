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
  let counts = allJobs.children.length;
  if (count >= 0) {
    jobCount.innerText = count + " of " + counts + " Jobs";
  } else {
    jobCount.innerText = counts + " Jobs";
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

interviewJobSection.addEventListener("click", function (event) {
  const parentNode = event.target.parentNode.parentNode;
  const companyName = parentNode.querySelector(".companyName");
  const position = parentNode.querySelector(".position");
  console.log(event.target.classList.contains("rejected"));
  if (event.target.classList.contains("rejected")) {
    interViewJob = interViewJob.filter(
      (job) => !(job.companyName == companyName && job.position == position),
    );
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
    addHiddenClass();
    removeHiddenClass(allJobsSection);
  }

  if (id === "interviewJobBtn") {
    allJobCount(interViewJob.length);
    addHiddenClass();
    removeHiddenClass(interviewJobSection);

    if (interViewJob.length > 0) {
      interviewJobSection.replaceChildren();

      interViewJob.forEach((jobData) =>
        displayCard(jobData, interviewJobSection, {
          status: "Applied Job",
          bgColor: "bg-green-500",
        }),
      );
    } else {
      let div = document.createElement("div");

      interviewJobSection.replaceChildren();
      div.innerHTML = "<h1>No Data Show</h1>";
      interviewJobSection.appendChild(div);
    }
  }

  if (id === "rejectedJobBtn") {
    allJobCount(rejectedJob.length);

    addHiddenClass();

    removeHiddenClass(rejectedJobSection);

    if (rejectedJob.length > 0) {
      rejectedJobSection.replaceChildren();
      rejectedJob.forEach((jobData) =>
        displayCard(jobData, rejectedJobSection, {
          status: "Rejected Job",
          bgColor: "bg-red-500",
        }),
      );
    } else {
      let div = document.createElement("div");

      rejectedJobSection.replaceChildren();
      div.innerHTML = "<h1>No Data Show</h1>";
      rejectedJobSection.appendChild(div);
    }
  }
}

// Implement Rejected And Interview function on interview and rejected job section

// interviewJobSection.addEventListener("click", function (event) {
//   const parentNode = event.target.parentNode.parentNode;
//   const companyName = parentNode.querySelector(".companyName");
//   const position = parentNode.querySelector(".position");
//   console.log(event.target.classList.contains("rejected"));
//   if (event.target.classList.contains("rejected")) {
//     interViewJob = interViewJob.filter(
//       (job) => !(job.companyName == companyName && job.position == position),
//     );
//   }
// });

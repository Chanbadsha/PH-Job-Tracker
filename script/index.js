let interViewJob = [];
let rejectedJob = [];

let jobCount = document.getElementById("job-count");
let totalJobNumberShow = document.getElementById("totalJobNumberShow");
let rejectedJobNumberShow = document.getElementById("rejectedJobNumberShow");
let interviewJobNumberShow = document.getElementById("interviewJobNumberShow");

function allJobCount() {
  const allJobs = document.getElementById("allJobs");

  jobCount.innerText = allJobs.children.length;
  totalJobNumberShow.innerText = allJobs.children.length;
  rejectedJobNumberShow.innerText = rejectedJob.length;
  interviewJobNumberShow.innerText = interViewJob.length;
}
allJobCount();

function interViewJobClick() {
  const jobData = document.getElementById("interview-btn");
}

const allJobs = document.getElementById("allJobs");

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

//

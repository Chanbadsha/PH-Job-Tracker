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
  rejectedJob.innerText = rejectedJob.length;
  interviewJobNumberShow.innerText = interViewJob.length;
}
allJobCount();

function interViewJobClick() {
  const jobData = document.getElementById("interview-btn");
  console.log(jobData);
}

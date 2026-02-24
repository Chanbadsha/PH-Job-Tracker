let interViewJob = [];
let rejectedJob = [];

// let allJobsCollection = [];

let allJobsCollection = [
  {
    companyName: "TechNova Solutions",
    position: "Frontend Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$85,000 - $105,000",
    status: { content: "Not Applied", bgColor: "bg-grey-400" },
    description:
      "We are looking for a skilled Frontend Developer with experience in React and modern JavaScript frameworks.",
    buttons: ["Interview", "Rejected"],
  },
  {
    companyName: "GreenLeaf Marketing",
    position: "Digital Marketing Specialist",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$60,000 - $75,000",
    status: { content: "Not Applied", bgColor: "bg-grey-400" },
    description:
      "Seeking a creative Digital Marketing Specialist to manage SEO, PPC campaigns, and social media strategies.",
    buttons: ["Interview", "Rejected"],
  },
  {
    companyName: "FinCore Bank",
    position: "Data Analyst",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    status: { content: "Not Applied", bgColor: "bg-grey-400" },
    description:
      "Analyze financial datasets, generate insights, and create dashboards using SQL and Power BI.",
    buttons: ["Interview", "Rejected"],
  },
  {
    companyName: "HealthPlus Clinic",
    position: "Registered Nurse",
    location: "Houston, TX",
    type: "Part-time",
    salary: "$35 - $45 per hour",
    status: { content: "Not Applied", bgColor: "bg-grey-400" },
    description:
      "Provide patient care, administer medications, and coordinate with healthcare teams.",
    buttons: ["Interview", "Rejected"],
  },
  {
    companyName: "SkyHigh Airlines",
    position: "Customer Service Representative",
    location: "Miami, FL",
    type: "Full-time",
    salary: "$40,000 - $50,000",
    status: { content: "Not Applied", bgColor: "bg-grey-400" },
    description:
      "Assist passengers with bookings, handle inquiries, and resolve customer issues efficiently.",
    buttons: ["Interview", "Rejected"],
  },
  {
    companyName: "CodeCraft Labs",
    position: "Backend Developer",
    location: "Remote",
    type: "Contract",
    status: { content: "Not Applied", bgColor: "bg-grey-400" },
    salary: "$50 - $70 per hour",
    description: "Develop and maintain RESTful APIs using Node.js and MongoDB.",
    buttons: ["Interview", "Rejected"],
  },
  {
    companyName: "EduSmart Academy",
    position: "High School Math Teacher",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$55,000 - $70,000",
    status: { content: "Not Applied", bgColor: "bg-grey-400" },
    description:
      "Teach Algebra and Calculus courses while fostering a positive learning environment.",
    buttons: ["Interview", "Rejected"],
  },
  {
    companyName: "UrbanBuild Construction",
    position: "Project Manager",
    location: "Seattle, WA",
    status: { content: "Not Applied", bgColor: "bg-grey-400" },
    type: "Full-time",
    salary: "$95,000 - $120,000",
    description:
      "Oversee construction projects, manage budgets, and coordinate with contractors and stakeholders.",
    buttons: ["Interview", "Rejected"],
  },
  {
    companyName: "BrightPath Logistics",
    position: "Supply Chain Coordinator",
    location: "Dallas, TX",
    type: "Full-time",
    salary: "$65,000 - $80,000",
    status: { content: "Not Applied", bgColor: "bg-grey-400" },
    description:
      "Coordinate shipments, manage inventory levels, and optimize supply chain operations.",
    buttons: ["Interview", "Rejected"],
  },
  {
    companyName: "CreativePulse Studio",
    position: "Graphic Designer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$70,000 - $85,000",
    status: { content: "Not Applied", bgColor: "bg-grey-400" },
    description:
      "Design digital and print materials including branding assets, advertisements, and website graphics.",
    buttons: ["Interview", "Rejected"],
  },
];

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

function loadData(data) {
  if (data.length > 0) {
    allJobsSection.replaceChildren();

    data.forEach((jobData) =>
      displayCard(jobData, allJobsSection, {
        status: "Not Applied",
        bgColor: "bg-black",
        textColor: "text-white",
      }),
    );
  } else {
    displayNoDataCard(allJobsSection);
  }
}

loadData(allJobsCollection);

function allJobCount(count) {
  const allJobs = allJobsCollection.length;
  let counts = allJobs;
  if (count >= 0) {
    jobCount.innerText = count + " of " + counts + " Jobs";
  } else {
    jobCount.innerText = counts + " Jobs";
  }

  totalJobNumberShow.innerText = allJobs;
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

  allJobCount();
}

let allJobs = document.getElementById("allJobs");

allJobs.addEventListener("click", function (event) {
  const parentNode = event.target.parentNode.parentNode.parentNode;

  const companyName = parentNode.querySelector(".companyName").innerText;
  const position = parentNode.querySelector(".position").innerText;
  const location = parentNode.querySelector(".location").innerText;
  const type = parentNode.querySelector(".type").innerText;
  const salary = parentNode.querySelector(".salary").innerText;
  const description = parentNode.querySelector(".description").innerText;

  const jobData = {
    companyName,
    location,
    position,
    type,
    salary,
    description,
  };

  if (event.target.classList.contains("deleteBtn")) {
    allJobsCollection = allJobsCollection.filter(
      (job) =>
        !(
          job.companyName == jobData.companyName &&
          job.position == jobData.position
        ),
    );

    allJobCount(allJobsCollection);
    loadData(allJobsCollection);
  }

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
    addHiddenClass();
    removeHiddenClass(allJobsSection);
    loadData();
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
          textColor: "text-white",
        }),
      );
    } else {
      displayNoDataCard(interviewJobSection);
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
          textColor: "text-white",
        }),
      );
    } else {
      displayNoDataCard(rejectedJobSection);
    }
  }
}

// Implement Rejected And Interview function on interview and rejected job section

interviewJobSection.addEventListener("click", function (event) {
  const parentNode = event.target.parentNode.parentNode;
  const companyName = parentNode.querySelector(".companyName").innerText;
  const position = parentNode.querySelector(".position").innerText;

  if (event.target.classList.contains("rejected")) {
    const jobData = getJobData(event);

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
      interViewJob = interViewJob.filter(
        (job) =>
          !(
            job.companyName == jobData.companyName &&
            job.position == jobData.position
          ),
      );
      allJobCount();
    }

    interViewJob = interViewJob.filter(
      (job) => !(job.companyName == companyName && job.position == position),
    );

    allJobCount(interViewJob.length);
    if (interViewJob.length > 0) {
      interviewJobSection.replaceChildren();

      interViewJob.forEach((jobData) =>
        displayCard(jobData, interviewJobSection, {
          status: "Applied",
          bgColor: "bg-green-500",
          textColor: "text-white",
        }),
      );
    } else {
      displayNoDataCard(interviewJobSection);
    }
  }
});

rejectedJobSection.addEventListener("click", function (event) {
  const parentNode = event.target.parentNode.parentNode;
  const companyName = parentNode.querySelector(".companyName").innerText;
  const position = parentNode.querySelector(".position").innerText;

  if (event.target.classList.contains("interview")) {
    const jobData = getJobData(event);

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
      rejectedJob = rejectedJob.filter(
        (job) =>
          !(
            job.companyName == jobData.companyName &&
            job.position == jobData.position
          ),
      );
      allJobCount();
    }

    rejectedJob = rejectedJob.filter(
      (job) => !(job.companyName == companyName && job.position == position),
    );

    allJobCount(rejectedJob.length);
    if (rejectedJob.length > 0) {
      rejectedJobSection.replaceChildren();

      rejectedJob.forEach((jobData) =>
        displayCard(jobData, rejectedJobSection, {
          status: "Rejected Job",
          bgColor: "bg-red-500",
          textColor: "text-white",
        }),
      );
    } else {
      displayNoDataCard(rejectedJobSection);
    }
  }
});

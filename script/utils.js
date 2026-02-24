function getJobData(event) {
  const parentNode = event.target.parentNode.parentNode;

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

  return jobData;
}

function displayCard(jobData, sectionName) {
  let div = document.createElement("div");

  div.innerHTML = `<div class="card card-dash bg-base-100 w-full">
          <div class="card-body gap-3">
       <div class="flex justify-between items-center">
       
            <h2 class="companyName text-2xl font-semibold">
           ${jobData.companyName}
            </h2>
          <button class=" hover:text-white  hover:bg-red-500 hover:rounded-full hover:p-2 p-2 ">  <i class="fa-solid fa-trash deleteBtn"></i></button>
       
       
       
       
       </div>
            <h4 class="text-xl position">${jobData.position}</h4>
            <div class="flex gap-3 text-sm md:text-base">
              <span class="location">${jobData.location}</span>
              <span class="type">${jobData.type}</span>
              <span class="salary">${jobData.salary}</span>
            </div>

            <div><button class="btn  jobCardStatusBtn bg-black  text-white">Not Applied</button></div>

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

function displayNoDataCard(sectionName) {
  sectionName.replaceChildren();
  let div = document.createElement("div");
  div.innerHTML = `
<div class=" w-full bg-white text-center rounded-lg gap-2 lg:gap-3 min-h-[300px] lg:min-h-[400px] flex justify-center items-center flex-col">
<i class="fa-solid fa-clipboard-list text-3xl md:text-4xl  lg:text-6xl font-bold"></i>
<h1 class=" text-2xl md:text-3xl lg:text-5xl font-bold ">No Jobs Available</h1>


<p>Check back soon for new job opportunities</p>
</div> `;

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

function jobCardStatusBtn(parentNode, innerText, removeBgColor, addBgColor) {
  console.log(parentNode);
  let jobCardStatusBtns = parentNode.querySelector(".jobCardStatusBtn");
  console.log(jobCardStatusBtns.innerText);
  jobCardStatusBtns.innerText = innerText;
  console.log(jobCardStatusBtns.innerText);
  // jobCardStatusBtns.classList.remove(removeBgColor, "text-white");
  // jobCardStatusBtns.classList.add(addBgColor, "text-white");
}

var typed = new Typed(".typing", {
  strings: [
    "",
    "អ្នកអភិវឌ្ឍន៍គេហទំព័រ", // Web Developer in Khmer
    "Web Developer",
    "PROGRAMMING",
    "អ្នកបង្កើតកម្មវិធី"
  ],
  typeSpeed: 70, 
  backSpeed: 50, 
  startDelay: 500, 
  backDelay: 1000, 
  loop: true, 
});

// ================================Aside==================

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

const navTogglerBtn = document.querySelector(".nav-toggle");
const aside = document.querySelector(".aside");

// Close the aside when clicking on a nav link
for (let i = 0; i < totalNavList; i++) {
const a = navList[i].querySelector("a");

a.addEventListener("click", function () {
    removeBackSectionClass();
  // Remove active class from all sections
  allSection.forEach(section => section.classList.remove('active'));

  // Add active class to the target section
  const targetSection = document.querySelector(this.getAttribute("href"));

  targetSection.classList.add('active');

  // Remove active class from all nav links
  navList.forEach(item => item.querySelector("a").classList.remove("active"));

  // Add active class to the clicked link
  this.classList.add("active");

  // Show the section
  showSection(this);

  // Close the aside
  if (aside.classList.contains("open")) {
    asideSectionTogglerBtn();
  }
});
}

// Toggle aside visibility
navTogglerBtn.addEventListener("click", () => {
asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
aside.classList.toggle("open");
navTogglerBtn.classList.toggle("open");
}

// Show the active section
function showSection(element) {
const target = element.getAttribute("href").split("#")[1];
document.querySelector("#" + target).classList.add("active");
}



// Function to update navigation
function updateNave(element) {
  for(i=0;i<navToggler.length;i++) {
   navList[i].querySelector("a").classList.remove("active");
   const target = element.getAttribute("href").split("#")[1];
  }
 
}

// Event listener for the "hire-me" button
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  console.log(sectionIndex);
  showSection(this);
  updateNave(this); // Pass the current element to updateNave
  removeBackSectionClass();
  addbackSection(sectionIndex);
});

function removeBackSectionClass(){
for(let i = 0; i <totalSection;i++){
  allSection[i].classList.remove("back-section");
}

}

function addbackSection(){
      allSection[num].add("back-section");
} 
const toggler = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-item");
const projectTabBtns = document.querySelectorAll(".project-tab-item");
const projectGridItems = document.querySelectorAll(".project-grid-item");

toggler.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((item) => item.classList.remove("nav-item-active"));
    this.classList.add("nav-item-active");
    navLinks.classList.toggle("active");
  });
});

projectTabBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    projectTabBtns.forEach((btn) =>
      btn.classList.remove("project-tab-item-active")
    );
    this.classList.add("project-tab-item-active");

    projectGridItems.forEach((item) => {
      if (item.classList.contains(btn.id)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});

const pageviewsCount = document.getElementById('pageviews-count');
const visitsCount = document.getElementById('visits-count');

if (sessionStorage.getItem('visit') === null) {
  // New visit and pageview
  updateCounter('type=visit-pageview');
} else {
  // Pageview
  updateCounter('type=pageview');
}

function updateCounter(type) {

  fetch('http://127.0.0.1:3002/api?'+type) 
    .then(res => res.json())
    .then(data => {
      pageviewsCount.textContent = data.pageviews; 
      visitsCount.textContent = data.visits;
    })

}

sessionStorage.setItem('visit', 'x');
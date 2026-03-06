const slider = document.getElementById("slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const card = document.querySelector(".card");

next.addEventListener("click", () => {
    slider.scrollLeft += card.offsetWidth + 30;
});

prev.addEventListener("click", () => {
    slider.scrollLeft -= card.offsetWidth + 30;
});





function bob() {
    window.location.href = window.location.href;
}



const menuBtn = document.getElementById("menu-button");
const closeBtn = document.getElementById("close-button");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
});


function openTab() {
  document.getElementById("myTab").style.display = "flex";
  document.getElementById("overlay").style.display = "block";
}

function closeTab() {
  document.getElementById("myTab").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
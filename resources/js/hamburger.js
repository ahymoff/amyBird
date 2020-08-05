/* Hamburger Menu Animation */
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

/* Tab Selection */
const series1 = document.getElementById("series1");
const series2 = document.getElementById("series2");
const series3 = document.getElementById("series3");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

function openSeriesA() {
  series1.style.transform = "translateX(0)";
  series2.style.transform = "translateX(-10000px)";
  series3.style.transform = "translateX(-10000px)";
  btn1.style.color = "black";
  btn2.style.color = "#9C9B9B";
  btn3.style.color = "#9C9B9B";
}

function openSeriesB() {
  series1.style.transform = "translateX(-10000px)";
  series2.style.transform = "translateX(0)";
  series3.style.transform = "translateX(-10000px)";
  btn1.style.color = "#9C9B9B";
  btn2.style.color = "black";
  btn3.style.color = "#9C9B9B";
}

function openSeriesC() {
  series1.style.transform = "translateX(-10000px)";
  series2.style.transform = "translateX(-10000px)";
  series3.style.transform = "translateX(0)";
  btn1.style.color = "#9C9B9B";
  btn2.style.color = "#9C9B9B";
  btn3.style.color = "black";
}

import "./styles/main.css";
import "./styles/responsive.css";
import main from "./view/main";

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const mainElement = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

mainElement.addEventListener("click", function () {
  drawer.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", main);

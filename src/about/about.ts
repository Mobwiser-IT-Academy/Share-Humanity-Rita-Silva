import "./about.css";

const button = document.getElementById("arrow-down");

button?.addEventListener("click", () => {
  button.style.opacity = "1";
  button.style.animation = "none";
});

import "./index.css";
import {Issue} from "./issue";




createHtml("");

const showAll = document.getElementById("show-all");
const health = document.getElementById("health");
const social = document.getElementById("social");
const economic = document.getElementById("economic");
const environment = document.getElementById("environment");
const searchButton = document.getElementById("search-button");

showAll?.addEventListener("click", function () {
  createHtml("");
});

health?.addEventListener("click", function () {
  createHtml("Health");
});
social?.addEventListener("click", function () {
  createHtml("Social");
});
economic?.addEventListener("click", function () {
  createHtml("Economic");
});
environment?.addEventListener("click", function () {
  createHtml("Environment");
});

// Search Bar Filter

searchButton?.addEventListener("click", function () {
  const search = (<HTMLInputElement>document.getElementById("searchbar")).value;
  const upperSearch =
    search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();

  createHtml(upperSearch);

  window.location.href = "#issues-container";

  console.log(search);
});

const searchBar = document.getElementById("searchbar");

searchBar?.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("search-button")?.click();
    window.location.href = "#issues-container";
  }
});

}
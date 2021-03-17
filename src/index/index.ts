import "./index.css";
import { Issue } from "./issue";
import { IssueService } from "./issueService";
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDfMNPfvTkPKJrZ93a54DD7UvpXeiNoR38",
  authDomain: "share-humanity.firebaseapp.com",
  projectId: "share-humanity",
});

const db = firebase.firestore();

const firebaseData: any = db.collection("Issues");

export const issues: Issue[] = [];

firebaseData.get().then((snapshot: Issue[]) => {
  snapshot.forEach((doc: any) => {
    issues.push(doc.data());

  });
  
  IssueService.createHtml(issues,"");

});



const showAll = document.getElementById("show-all");
const health = document.getElementById("health");
const social = document.getElementById("social");
const economic = document.getElementById("economic");
const environment = document.getElementById("environment");
const searchButton = document.getElementById("search-button");

showAll?.addEventListener("click", () => {
  IssueService.createHtml(issues,"");
});

health?.addEventListener("click", () => {
  IssueService.createHtml(issues,"Health");
});
social?.addEventListener("click", () => {
  IssueService.createHtml(issues,"Social");
});
economic?.addEventListener("click", () => {
  IssueService.createHtml(issues,"Economic");
});
environment?.addEventListener("click", () => {
  IssueService.createHtml(issues,"Environment");
});

// Search Bar Filter

searchButton?.addEventListener("click", () => {
  const search = (<HTMLInputElement>document.getElementById("searchbar")).value;
  const upperSearch =
    search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();

  IssueService.createHtml(issues,upperSearch);

  window.location.href = "#issues-container";
  console.log(search);

  setTimeout(IssueService.clearSearchbar, 20);
});

const searchBar = <HTMLInputElement>document.getElementById("searchbar");
searchBar?.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("search-button")?.click();
    window.location.href = "#issues-container";
  }
});

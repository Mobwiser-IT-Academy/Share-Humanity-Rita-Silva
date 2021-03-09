import "./index.css";
import { Issue } from "./issue";
import { IssueService } from "./issueService";
import firebase from 'firebase/app';
import 'firebase/firestore';


firebase.initializeApp( {
  apiKey: "AIzaSyDfMNPfvTkPKJrZ93a54DD7UvpXeiNoR38",
  authDomain: "share-humanity.firebaseapp.com",
  projectId: "share-humanity",
  
});
 let db = firebase.firestore();

db.collection('Issues')

db.collection('Issues').get().then((snapshot)=>{
  snapshot.forEach((doc)=>{
    console.log(doc.data())
  })
})





export const issues: Issue[] = [
  new Issue(
    "https://executivedigest.sapo.pt/wp-content/uploads/2020/03/coronavirus1.jpg",
    "Coronavirus Pandemic",
    "Coronavirus Pandemic is afecting right now more than <strong>12 Million </strong> People around the world.",
    "coronavirus.html",
    ["Health", "Coronavirus", "Covid", "Corona", "Pandemic"]
  ),

  new Issue(
    "https://borgenproject.org/wp-content/uploads/Poverty-in-Malawi.jpg",
    "Poverty",
    "More than <strong> 704 Million </strong> people in the world live in extreme poverty.",
    "detail.html",
    ["Social", "Economic", "Poverty"]
  ),

  new Issue(
    "https://www.lowyinstitute.org/sites/default/files/49838682888_f94f9ad9f4_k_0.jpg",
    "Hunger",
    "Around the world, <strong>821 Million </strong> people do not have enough of the food they need to live an active, healthy life",
    "detail.html",
    ["Social", "Economic", "Africa", "Hunger", "Food"]
  ),

  new Issue(
    "https://www.health.harvard.edu/media/content/images/cr/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg",
    "Water",
    "<strong> 829 000</strong> people are estimated to die each year from diarrhoea as a result of unsafe drinking-water, sanitation, and hand hygiene.",
    "detail.html",
    ["Social", "Environment", "Planet", "Water", "Climate"]
  ),

  new Issue(
    "https://images.theconversation.com/files/292578/original/file-20190916-19030-1c91vdb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=cli",
    "Climate Change",
    "<strong>11%</strong> of the world’s population is currently vulnerable to climate change impacts such as droughts, floods, heat waves, extreme weather events and sea-level rise",
    "detail.html",
    ["Environment", "Climate change", "Planet", "climate"]
  ),

  new Issue(
    "https://www.theelders.org/sites/default/files/migrated4/syrian-refugee-child-beach-600x400.jpg",
    "Refugees",
    "At least <strong> 79.5 Million </strong> people around the world have been forced to flee their homes. Among them are nearly <strong>26 Million</strong> refugees, around half of whom are under the age of 18",
    "detail.html",
    [
      "Social",
      "Economic",
      "International",
      "World",
      "Refugees",
      "Refugees crisis",
    ]
  ),

  new Issue(
    "https://i1.wp.com/www.travindy.com/wp-content/uploads/2017/12/PATA-will-highlight-the-issue-of-gender-equality-in-2018-Dec122017.png?resize=710%2C502&ssl=1",
    "Gender Equality",
    "Despite progress, gender inequality continues to hold women and girls back and deprive them of basic rights and opportunities.",
    "detail.html",
    ["Social", "Economic", "Gender", "Equality", "Gender equality"]
  ),

  new Issue(
    "https://media3.s-nbcnews.com/j/newscms/2018_43/2616181/181023-domestic-violence-stock-ac-618p_5c28e9c89f761909895faa939e650813.fit-2000w.jpg",
    "Domestic Violence",
    "About <strong>1 in 3 (35%) </strong> of women worldwide have experienced either physical and/or sexual intimate partner violence or non-partner sexual violence in their lifetime.",
    "detail.html",
    ["Social", "Domestic violence", "Violence"]
  ),
];

IssueService.createHtml("");

const showAll = document.getElementById("show-all");
const health = document.getElementById("health");
const social = document.getElementById("social");
const economic = document.getElementById("economic");
const environment = document.getElementById("environment");
const searchButton = document.getElementById("search-button");

showAll?.addEventListener("click", () => {
  IssueService.createHtml("");
});

health?.addEventListener("click", () => {
  IssueService.createHtml("Health");
});
social?.addEventListener("click", () => {
  IssueService.createHtml("Social");
});
economic?.addEventListener("click", () => {
  IssueService.createHtml("Economic");
});
environment?.addEventListener("click", () => {
  IssueService.createHtml("Environment");
});

// Search Bar Filter

searchButton?.addEventListener("click", () => {
  const search = (<HTMLInputElement>document.getElementById("searchbar")).value;
  const upperSearch =
    search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();

  IssueService.createHtml(upperSearch);

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

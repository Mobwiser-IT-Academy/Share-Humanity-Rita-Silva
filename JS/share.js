const issues = [{
    type: "Health",
    class: "issue1",
    title: "Coronavirus Pandemic",
    src: "https://executivedigest.sapo.pt/wp-content/uploads/2020/03/coronavirus1.jpg",
    description: "Coronavirus Pandemic is afecting right now more than <strong>12 Million </strong> People around the world.",
    href: "coronavirus.html",
  },

  {
    type: "Social",
    class: "issue2",
    title: "Poverty",
    src: "https://borgenproject.org/wp-content/uploads/Poverty-in-Malawi.jpg",
    description: "More than <strong> 704 Million </strong> people in the world live in extreme poverty.",
    href: "issues.html",
  },

  {
    type: ["Social", "Economic"],
    class: "issue3",
    title: "Hunger",
    src: "https://www.lowyinstitute.org/sites/default/files/49838682888_f94f9ad9f4_k_0.jpg",
    description: "Around the world, <strong>821 Million </strong> people do not have enough of the food they need to live an active, healthy life",
    href: "issues.html",
  },

  {
    type: ["Social", "Environment"],
    class: "issue4",
    title: "Water",
    src: "https://www.health.harvard.edu/media/content/images/cr/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg",
    description: "<strong> 829 000</strong> people are estimated to die each year from diarrhoea as a result of unsafe drinking-water, sanitation, and hand hygiene.",
    href: "issues.html",
  },

  {
    type: "Environment",
    class: "issue5",
    title: "Climate Change",
    src: "https://images.theconversation.com/files/292578/original/file-20190916-19030-1c91vdb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=cli",
    description: "<strong>11%</strong> of the world’s population is currently vulnerable to climate change impacts such as droughts, floods, heat waves, extreme weather events and sea-level rise",
    href: "issues.html",
  },

  {
    type: "Social",
    class: "issue6",
    title: "Refugees",
    src: "https://www.theelders.org/sites/default/files/migrated4/syrian-refugee-child-beach-600x400.jpg",
    description: "At least <strong> 79.5 Million </strong> people around the world have been forced to flee their homes. Among them are nearly <strong>26 Million</strong> refugees, around half of whom are under the age of 18",
    href: "issues.html",
  },

  {
    type: ["Social", "Economic"],
    class: "issue7",
    title: "Gender Equality",
    src: "https://i1.wp.com/www.travindy.com/wp-content/uploads/2017/12/PATA-will-highlight-the-issue-of-gender-equality-in-2018-Dec122017.png?resize=710%2C502&ssl=1",
    description: "Despite progress, gender inequality continues to hold women and girls back and deprive them of basic rights and opportunities.",
    href: "issues.html",
  },

  {
    type: "Social",
    class: "issue8",
    title: "Domestic Violence",
    src: "https://media3.s-nbcnews.com/j/newscms/2018_43/2616181/181023-domestic-violence-stock-ac-618p_5c28e9c89f761909895faa939e650813.fit-2000w.jpg",
    description: "About <strong>1 in 3 (35%) </strong> of women worldwide have experienced either physical and/or sexual intimate partner violence or non-partner sexual violence in their lifetime.",
    href: "issues.html",
  },
];



function createHtml() {

  let issuesHtml = '';
  let array = [];
  for (let i = 0; i < issues.length; i++) {

    issuesHtml += `<div id=${issues[i].class}><img src=${issues[i].src}></img><h5>${issues[i].title}</h5> <p>${issues[i].description}</p> <button> <a href=${issues[i].href}>View Detail</a></button></div>`;
    array.push(issuesHtml);

  }



  var container = document.getElementById('issues-container');
  container.innerHTML = issuesHtml;

}

createHtml();



var showAll = document.getElementById("show-all");
var health = document.getElementById("health");
var social = document.getElementById("social");
var economic = document.getElementById("economic");
var environment = document.getElementById("environment");




showAll.addEventListener("click", function () {
  createHtml();
});

health.addEventListener("click", function () {
  filterByType("Health");
});
social.addEventListener("click", function () {
  filterByType("Social");

});
economic.addEventListener("click", function () {
  filterByType("Economic");
});
environment.addEventListener("click", function () {
  filterByType("Environment");
});


function filterByType(issue) {

  let array = [];

  for (let i = 0; i < issues.length; i++) {

    if (issue === issues[i].type) {
      array.push(issues[i]);
    }

  }
  console.log(array)

};



// let container = document.getElementById("issues-container");
// let issue1 = document.getElementById("issue1");
// let issue2 = document.getElementById("issue2");
// let issue3 = document.getElementById("issue3");
// let issue4 = document.getElementById("issue4");
// let issue5 = document.getElementById("issue5");
// let issue6 = document.getElementById("issue6");
// let issue7 = document.getElementById("issue7");
// let issue8 = document.getElementById("issue8");

// function showAll() {
//   container.appendChild(issue1);
//   container.appendChild(issue2);
//   container.appendChild(issue3);
//   container.appendChild(issue4);
//   container.appendChild(issue5);
//   container.appendChild(issue6);
//   container.appendChild(issue7);
//   container.appendChild(issue8);
// }

// function health() {
//   container.appendChild(issue1);
//   issue2.remove();
//   issue3.remove();
//   issue4.remove();
//   issue5.remove();
//   issue6.remove();
//   issue7.remove();
//   issue8.remove();
// }

// function social() {
//   issue1.remove();
//   issue5.remove();

//   container.appendChild(issue2);
//   container.appendChild(issue3);
//   container.appendChild(issue4);
//   container.appendChild(issue6);
//   container.appendChild(issue7);
//   container.appendChild(issue8);
// }

// function economic() {
//   issue1.remove();
//   issue5.remove();
//   issue8.remove();

//   container.appendChild(issue2);
//   container.appendChild(issue3);
//   container.appendChild(issue4);
//   container.appendChild(issue6);
//   container.appendChild(issue7);
// }

// function environment() {
//   issue1.remove();
//   issue2.remove();
//   issue3.remove();
//   issue6.remove();
//   issue7.remove();
//   issue8.remove();

//   container.appendChild(issue4);
//   container.appendChild(issue5);
// }
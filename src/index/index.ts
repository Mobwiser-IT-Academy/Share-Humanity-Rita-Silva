import "./index.css";

const issues = [
    {
        category: ["Health", "Coronavirus", "Covid", "Corona", "Pandemic"],
        title: "Coronavirus Pandemic",
        src:
      "https://executivedigest.sapo.pt/wp-content/uploads/2020/03/coronavirus1.jpg",
        description:
      "Coronavirus Pandemic is afecting right now more than <strong>12 Million </strong> People around the world.",
        href: "coronavirus.html",
    },

    {
        category: ["Social", "Economic", "Poverty"],
        title: "Poverty",
        src: "https://borgenproject.org/wp-content/uploads/Poverty-in-Malawi.jpg",
        description:
      "More than <strong> 704 Million </strong> people in the world live in extreme poverty.",
        href: "detail.html",
    },

    {
        category: ["Social", "Economic", "Africa", "Hunger", "Food"],
        title: "Hunger",
        src:
      "https://www.lowyinstitute.org/sites/default/files/49838682888_f94f9ad9f4_k_0.jpg",
        description:
      "Around the world, <strong>821 Million </strong> people do not have enough of the food they need to live an active, healthy life",
        href: "detail.html",
    },

    {
        category: ["Social", "Environment", "Planet", "Water", "Climate"],
        title: "Water",
        src:
      "https://www.health.harvard.edu/media/content/images/cr/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg",
        description:
      "<strong> 829 000</strong> people are estimated to die each year from diarrhoea as a result of unsafe drinking-water, sanitation, and hand hygiene.",
        href: "detail.html",
    },

    {
        category: ["Environment", "Climate change", "Planet", "climate"],
        title: "Climate Change",
        src:
      "https://images.theconversation.com/files/292578/original/file-20190916-19030-1c91vdb.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=cli",
        description:
      "<strong>11%</strong> of the world’s population is currently vulnerable to climate change impacts such as droughts, floods, heat waves, extreme weather events and sea-level rise",
        href: "detail.html",
    },

    {
        category: [
            "Social",
            "Economic",
            "International",
            "World",
            "Refugees",
            "Refugees crisis",
        ],
        title: "Refugees",
        src:
      "https://www.theelders.org/sites/default/files/migrated4/syrian-refugee-child-beach-600x400.jpg",
        description:
      "At least <strong> 79.5 Million </strong> people around the world have been forced to flee their homes. Among them are nearly <strong>26 Million</strong> refugees, around half of whom are under the age of 18",
        href: "detail.html",
    },

    {
        category: ["Social", "Economic", "Gender", "Equality", "Gender equality"],
        title: "Gender Equality",
        src:
      "https://i1.wp.com/www.travindy.com/wp-content/uploads/2017/12/PATA-will-highlight-the-issue-of-gender-equality-in-2018-Dec122017.png?resize=710%2C502&ssl=1",
        description:
      "Despite progress, gender inequality continues to hold women and girls back and deprive them of basic rights and opportunities.",
        href: "detail.html",
    },

    {
        category: ["Social", "Domestic violence", "Violence"],
        title: "Domestic Violence",
        src:
      "https://media3.s-nbcnews.com/j/newscms/2018_43/2616181/181023-domestic-violence-stock-ac-618p_5c28e9c89f761909895faa939e650813.fit-2000w.jpg",
        description:
      "About <strong>1 in 3 (35%) </strong> of women worldwide have experienced either physical and/or sexual intimate partner violence or non-partner sexual violence in their lifetime.",
        href: "detail.html",
    },
];

function createHtml(filterByCategory: string) {
    let issuesHtml = "";

    for (let i = 0; i < issues.length; i++) {
        if (
            !filterByCategory ||
      issues[i].category.some((issue) => issue === filterByCategory)
        ) {
            issuesHtml += `<div><img src=${issues[i].src}></img><h5>${issues[i].title}</h5> <p>${issues[i].description}</p> <button> <a href=${issues[i].href}>View Detail</a></button></div>`;
        }
    }

    console.log(issues);

    const container = document.getElementById("issues-container");
    container.innerHTML = issuesHtml;
}

createHtml("");

//

const showAll = document.getElementById("show-all");
const health = document.getElementById("health");
const social = document.getElementById("social");
const economic = document.getElementById("economic");
const environment = document.getElementById("environment");
const container = document.getElementById("issues-container");
const searchButton = document.getElementById("search-button");

showAll.addEventListener("click", function () {
    createHtml("");
});

health.addEventListener("click", function () {
    createHtml("Health");
});
social.addEventListener("click", function () {
    createHtml("Social");
});
economic.addEventListener("click", function () {
    createHtml("Economic");
});
environment.addEventListener("click", function () {
    createHtml("Environment");
});

// Search Bar Filter
const searchBar = document.getElementById("searchbar");
const search = searchBar.value;

searchButton.addEventListener("click", function () {
    const upperSearch =
    search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();

    createHtml(upperSearch);

    window.location.href = "#issues-container";

    console.log(search);
});

searchBar.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search-button").click();
        window.location.href = "#issues-container"; 
    }
});

function createHtml(filterByCategory) {

    let issuesHtml = '';

    for (let i = 0; i < issues.length; i++) {

        if (!filterByCategory || issues[i].category.some((issue) => issue === filterByCategory)) {

            issuesHtml += `<div id=${issues[i].class}><img src=${issues[i].src}></img><h5>${issues[i].title}</h5> <p>${issues[i].description}</p> <button> <a href=${issues[i].href}>View Detail</a></button></div>`;

        }
    }

    console.log(issues);

    var container = document.getElementById('issues-container');
    container.innerHTML = issuesHtml;


}

createHtml();

// 


var showAll = document.getElementById("show-all");
var health = document.getElementById("health");
var social = document.getElementById("social");
var economic = document.getElementById("economic");
var environment = document.getElementById("environment");
var container = document.getElementById('issues-container');
var searchButton = document.getElementById('search-button');



showAll.addEventListener("click", function () {
    createHtml();

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

searchButton.addEventListener("click", function () {

    var searchBar = document.getElementById('searchbar');
    var search = searchBar.value
    var upperSearch = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();

    createHtml(upperSearch);


    searchBar.value = "";

    window.location = "#issues-container"

});

var searchBar = document.getElementById('searchbar');

searchBar.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search-button").click();
        window.location = "#issues-container"
    }
});
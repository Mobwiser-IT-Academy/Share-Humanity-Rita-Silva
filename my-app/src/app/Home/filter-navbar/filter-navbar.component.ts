import { Component, OnInit } from '@angular/core';
import{Issues} from '../../mock-issues'
import{IssuesContainerComponent} from '../issues-container/issues-container.component'

@Component({
  selector: 'app-filter-navbar',
  templateUrl: './filter-navbar.component.html',
  styleUrls: ['./filter-navbar.component.css']
})
export class FilterNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {



    const showAll = document.getElementById("show-all");
    const health = document.getElementById("health");
    const social = document.getElementById("social");
    const economic = document.getElementById("economic");
    const environment = document.getElementById("environment");
    const searchButton = document.getElementById("search-button");

    
    searchButton?.addEventListener("click", () => {
      const search = (<HTMLInputElement>document.getElementById("searchbar")).value;
      const upperSearch =
        search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();
    
      window.location.href = "#issues-container";
      console.log(search);
    
      IssuesContainerComponent.clearSearchbar()
    });


    showAll?.addEventListener("click", () => {
      IssuesContainerComponent.createHtml(Issues,"");
    });

    health?.addEventListener("click", () => {
     IssuesContainerComponent.createHtml(Issues,"Health");
    });
    social?.addEventListener("click", () => {
      IssuesContainerComponent.createHtml(Issues,"Social");
    });
    economic?.addEventListener("click", () => {
      IssuesContainerComponent.createHtml(Issues,"Economic");
    });
    environment?.addEventListener("click", () => {
      IssuesContainerComponent.createHtml(Issues,"Environment");
    }); 

    const searchBar = <HTMLInputElement>document.getElementById("searchbar");
    searchBar?.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("search-button")?.click();
    window.location.href = "#issues-container";
  }
});



  }

}

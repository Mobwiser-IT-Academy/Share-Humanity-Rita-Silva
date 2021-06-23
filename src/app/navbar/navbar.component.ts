import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {HomeComponent} from '../home/home.component'
import { issues } from '../mock-issues';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sorted=issues;

  constructor() { }

  ngOnInit(): void {


  }

  faSearch = faSearch;

  searchButton(){
    const search= (document.getElementById('searchbar')) as HTMLInputElement;
    const issuesContainer = (document.getElementById('issues-container')) as HTMLElement;


   let searchvalue = search.value

   console.log(searchvalue)

  console.log(issuesContainer)

  issuesContainer.innerHTML='';

 

  

  
    

  
  }



}

import { Component, OnInit } from '@angular/core';
import {faArrowCircleUp, faSortNumericDown} from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {issues} from '../mock-issues';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

issues=issues;


  constructor() { 

  }

  ngOnInit(): void {

  }



 
  faArrowCircleUp=faArrowCircleUp;
  faSearch = faSearch;


 

public categoryFilter = 'ALL'; // by default, mostra todos os issues
private searchFilter = ''; // by default, o filtro da search bar está vazio
private filterType='';

public changeCategory(category: string) {
  this.categoryFilter = category;
}

public changeSearchFilter(event:any) {
 this.searchFilter = event;
 console.log(event)

}

public get filteredIssues() {
  if(this.categoryFilter === 'ALL' && !this.searchFilter) {
    return this.issues;
  }
  return
  
  return this.issues.filter((issues) => (this.categoryFilter === 'ALL' || issue.category === this.filterType) && (!this.searchFilter || issue.title.indexOf(this.searchFilter) >= 0)); 

}
 

//   generateIssues(){

//     this.sorted=issues;

 
//   }

  

//   healthIssues(){
//     this.sorted=[];

//  this.sorted.push(issues[0]);
//  console.log(this.sorted)

// }

// socialIssues(){
  
//   this.sorted=[];

//   this.sorted.push(issues[1],issues[2],issues[3],issues[5],issues[6],issues[7],);
//   console.log(this.sorted)


// }

// economicIssues(){
  
//   this.sorted=[];

//   this.sorted.push(issues[1],issues[2],issues[5],issues[6]);
//   console.log(this.sorted)


// }

// environmentIssues(){
  
//   this.sorted=[];

//   this.sorted.push(issues[3],issues[4]);
//   console.log(this.sorted)


// }



// searchButton(){
//   this.sorted=[];

// const issuesContainer = (document.getElementById('issues-container')) as HTMLElement;

// let search = (<HTMLInputElement>document.getElementById("searchbar")).value;


//    const upperSearch = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();



//   console.log(issuesContainer)

//   issues.forEach((issue) => {


//     if(issue.category.includes(upperSearch)){
// this.sorted.push(issue)
//     }

//   } )
 


//   window.location.href = "#issues-container";


// }


 


}


    
  

  










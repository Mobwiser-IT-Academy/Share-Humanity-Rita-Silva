import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {faArrowCircleUp, faSortNumericDown, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
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


 

public categoryFilter = 'All';
private searchFilter = ''; 
public searchValue='';

public changeCategory(category: string) {
  this.categoryFilter = category;
  console.log(category)

}

public changeSearchFilter(event:any) {
 this.searchFilter = event;
 console.log(this.searchValue)

}

public get filteredIssues() {

  this.searchValue= this.searchValue.charAt(0).toUpperCase() + this.searchValue.slice(1)

  if(this.categoryFilter === 'All'  && this.searchValue==='') {
    return this.issues;
  }

 

  return this.issues.filter((issue) => (issue.category.includes(this.categoryFilter) || issue.category.includes(this.searchValue)))



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

}
    
  

  










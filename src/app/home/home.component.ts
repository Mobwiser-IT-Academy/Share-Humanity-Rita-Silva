import { Component, OnInit } from '@angular/core';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';
import {issues} from '../mock-issues'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

sorted=issues;


  constructor() { 

  }

  ngOnInit(): void {

    // let html='';

    // issues.forEach(issue => {

    //   html += `<div><img class="image" src=${issue.src}></img><h5 class="box-title">${issue.title}</h5> <p>${issue.description}</p> <button> <a href=${issue.href}>View Detail</a></button></div>`;

    //   const container = <HTMLElement>(
    //     document.getElementById("issues-container")
    //   );

    //   container.innerHTML = html;
    // });


  }


 
  faArrowCircleUp=faArrowCircleUp;

  generateIssues(){

    this.sorted=issues;

 
  }

  healthIssues(){
    this.sorted=[];

 this.sorted.push(issues[0]);
 console.log(this.sorted)

}

socialIssues(){
  
  this.sorted=[];

  this.sorted.push(issues[1],issues[2],issues[3],issues[5],issues[6],issues[7],);
  console.log(this.sorted)


}

economicIssues(){
  
  this.sorted=[];

  this.sorted.push(issues[1],issues[2],issues[5],issues[6]);
  console.log(this.sorted)


}

environmentIssues(){
  
  this.sorted=[];

  this.sorted.push(issues[3],issues[4]);
  console.log(this.sorted)


}



    
  }

  






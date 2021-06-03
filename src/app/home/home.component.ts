import { Component, OnInit } from '@angular/core';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';
import {issues} from '../mock-issues'


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


 
  }

  healthIssues(){

    
    issues.splice(1,1);
    issues.splice(1,1);
    issues.splice(1,1);
    issues.splice(1,1);
    issues.splice(1,1);
    issues.splice(1,1);
    issues.splice(1,1);


    

     console.log(issues)



   





    
  }

  

}




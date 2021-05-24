import { Component, OnInit } from '@angular/core';
import {ISSUES} from '../mock-issues'



@Component({
  selector: 'app-issues-container',
  templateUrl: './issues-container.component.html',
  styleUrls: ['./issues-container.component.css'],
  
})
export class IssuesContainerComponent implements OnInit {


issues=ISSUES

  ngOnInit():void {

   let issuesHtml='';
  
//     for(let i=0; i<this.issues.length; i++){

//       issuesHtml += `<div class="box"><h5>${this.issues[i].title}</h5><img src=${this.issues[i].src}></img> <p>${this.issues[i].description}</p> <button> <a href=${this.issues[i].href}>View Detail</a></button></div>`;
//     }

//     let container = (<HTMLElement>document.getElementById("issues-container"));

// container.innerHTML = issuesHtml;
// }




}

  
}


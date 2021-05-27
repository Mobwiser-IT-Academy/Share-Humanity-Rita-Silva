import { Component, OnInit } from '@angular/core';
import {Issues} from '../../mock-issues'



@Component({
  selector: 'app-issues-container',
  templateUrl: './issues-container.component.html',
  styleUrls: ['./issues-container.component.css'],
  
})
export class IssuesContainerComponent implements OnInit {



issues=Issues;


  ngOnInit():void {

  

    


}

public static createHtml(issues:any, filterByCategory:string){

  let html = "";

    issues.forEach((issue: IssuesContainerComponent) => {
      if (
        !filterByCategory ||
        issues.category.some((issue:any) => issue === filterByCategory)
      ) {
        html += `<div class="box">
        <img src=${issues.src} /><h5>${issues.title}</h5> <p>${issues.description1} <strong>${issues.strong1}</strong> ${issues.description2} <strong>${issues.strong2}</strong> ${issues.description3}</p> <button><a href=${issues.href}>View Detail</a></button>
        
        </div>`;

        const container = <HTMLElement>(
          document.getElementById("issues-container")
        );

        container.innerHTML = html;
      }
    });

}

public static clearSearchbar(){
  const searchbar = <HTMLInputElement>document.getElementById("searchbar");
  searchbar.value = "";

}






  
}


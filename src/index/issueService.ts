import { Issue } from "./issue";
import {issues} from "./index"

export class IssueService {

  public static createHtml(filterByCategory:string): void {

    let html:string= "";

    issues.forEach((issue: Issue) => {
    
    if (!filterByCategory || issue.category.some((issue) => issue === filterByCategory)) {

    html += `<div><img src=${issue.src}></img><h5>${issue.title}</h5> <p>${issue.description}</p> <button> <a href=${issue.href}>View Detail</a></button></div>`;

    const container = <HTMLElement>document.getElementById("issues-container");

    container.innerHTML = html;
    }
    
  }
  
    )}
}
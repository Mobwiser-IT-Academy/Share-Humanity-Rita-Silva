import { Issue } from "./issue";


export class IssueService {

  public static createHtml(issues: Issue[]): string {
    let html= "";
  
    issues.forEach((issue: Issue) => html += `${issue.html}`);
    return html;

    const container = <HTMLElement>document.getElementById("issues-container");

    container.innerHTML = html;
   
  }
}
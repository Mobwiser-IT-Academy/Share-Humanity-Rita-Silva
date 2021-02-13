import { Issue } from "./issue";

export class issueService {

    public static generateHtml(issues: Issue[]): string {
      let html= "";
      issues.forEach((issue: Issue) => html += `${issue.html}`);
      return html;

      const container = <HTMLElement>document.getElementById("issues-container");

      container.innerHTML = html;
    }
  }
  
 
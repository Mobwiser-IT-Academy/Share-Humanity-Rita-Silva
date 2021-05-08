import { Issue } from "./issue";

export class IssueService {
  public static createHtml(issues:Issue[],filterByCategory: string): void {
    let html = "";

    issues.forEach((issue: Issue) => {
      if (
        !filterByCategory ||
        issue.category.some((issue) => issue === filterByCategory)
      ) {
        html += `<div><img src=${issue.src}></img><h5>${issue.title}</h5> <p>${issue.description}</p> <button> <a href=${issue.href}>View Detail</a></button></div>`;

        const container = <HTMLElement>(
          document.getElementById("issues-container")
        );

        container.innerHTML = html;
      }
    });
  }

  public static clearSearchbar() {
    const searchbar = <HTMLInputElement>document.getElementById("searchbar");
    searchbar.value = "";
  }
}

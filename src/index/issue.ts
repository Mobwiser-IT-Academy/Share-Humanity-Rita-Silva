
export class Issue {

private src;
private title;
private description;
private href;



public get html():string {

  return `<div><img src=${this.src}></img><h5>${this.title}</h5> <p>${this.description}</p> <button> <a href=${this.href}>View Detail</a></button></div>`;
}

  
}


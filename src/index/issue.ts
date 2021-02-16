
export class Issue {

private src: string="";
private title:string="";
private description:string="";
private href:string="";
private category:string[]=[];

public get html() {

  return `<div><img src=${this.src}></img><h5>${this.title}</h5> <p>${this.description}</p> <button> <a href=${this.href}>View Detail</a></button></div>`;
}

  
}


export class Issue {
  src: string;
  title: string;
  description;
  href: string;
  category: string[];

  constructor(
    src: string,
    title: string,
    description: string,
    href: string,
    category: string[]
  ) 
  
  {
    this.src = src;
    this.title = title;
    this.description = description;
    this.href = href;
    this.category = category;
  }

  public get html() {
    return `<div><img src=${this.src}></img><h5>${this.title}</h5> <p>${this.description}</p> <button> <a href=${this.href}>View Detail</a></button></div>`;
  }
}

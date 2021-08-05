import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { $ } from 'protractor';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {


    
}


  

showMenu(){

  let nav=document.getElementById("page-top");;
if(!nav?.classList.contains("show-menu")){
  nav?.classList.add("show-menu")
}
  else if(nav?.classList.contains("show-menu")){
    nav.classList.remove("show-menu")
  }

}


  faBars=faBars;
  
  }



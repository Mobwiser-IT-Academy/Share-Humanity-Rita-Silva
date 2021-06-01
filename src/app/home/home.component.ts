import { Component, OnInit } from '@angular/core';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';
import {issues} from '../mock-issues'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

issues=issues;


  constructor() { 

  }

  ngOnInit(): void {


  }


 
  faArrowCircleUp=faArrowCircleUp;

  test(){

   


    alert()
  }

}


if(pageYOffset){
  document.getElementById("#goTop")?.style.color!="white";
}

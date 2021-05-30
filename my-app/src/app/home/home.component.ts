import { Component, OnInit } from '@angular/core';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faArrowCircleUp=faArrowCircleUp;

  test(){

    let clear = '';

    const container = document.getElementById("issues-container");


    alert()
  }

}

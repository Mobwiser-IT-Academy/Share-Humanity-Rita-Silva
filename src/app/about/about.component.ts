import { Component, OnInit } from '@angular/core';
import {faGlobeEurope} from '@fortawesome/free-solid-svg-icons';
import {faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons';
import {HomeComponent} from '../home'




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faArrowAltCircleDown = faArrowAltCircleDown;
  faGlobeEurope=faGlobeEurope;

  testLocation(){



    
    
    }

}

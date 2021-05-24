import { Component, OnInit } from '@angular/core';
import {Issues} from '../../mock-issues'



@Component({
  selector: 'app-issues-container',
  templateUrl: './issues-container.component.html',
  styleUrls: ['./issues-container.component.css'],
  
})
export class IssuesContainerComponent implements OnInit {


issues=Issues



  ngOnInit():void {




}

  
}


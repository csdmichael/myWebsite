import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/services/common/common';
import { Site } from 'src/models/site';

import { User } from 'src/models/user';


@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: false
})

export class HomePage  implements OnInit {
  public section!: string;

  constructor(public router: Router) {
    
  }

  ngOnInit() {
    console.log('In Home Page');
    
    this.section = 'about';
   
  }

  
}

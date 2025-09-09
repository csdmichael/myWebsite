import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeService } from 'src/services/resume.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: false
})

export class HomePage  implements OnInit {
  public section!: string;
  public resume: any;
  constructor(public router: Router, private resumeSvc: ResumeService) {
    
  }

  ngOnInit() {
    console.log('In Home Page');
    this.resume = this.resumeSvc.getResume();
    console.log('Resume Data:', this.resume);
    this.section = 'about';
   
  }

  
}

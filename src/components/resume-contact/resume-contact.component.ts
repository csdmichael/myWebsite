import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-contact',
  templateUrl: './resume-contact.component.html',
  styleUrls: ['./resume-contact.component.scss'],
  standalone: false
})
export class ResumeContactComponent {
  @Input() contact!: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
}
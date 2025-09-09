import { Component, Input } from '@angular/core';
import { Contact } from 'src/models/resume.model';

@Component({
  selector: 'app-resume-contact',
  templateUrl: './resume-contact.component.html',
  styleUrls: ['./resume-contact.component.scss'],
  standalone: false
})
export class ResumeContactComponent {
  @Input() contact!: Contact
}
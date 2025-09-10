import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-education',
  templateUrl: './resume-education.component.html',
  styleUrls: ['./resume-education.component.scss'],
  standalone: false
})
export class ResumeEducationComponent {
  @Input() education!: string[];
}
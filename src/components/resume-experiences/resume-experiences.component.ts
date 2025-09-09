import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-experiences',
  templateUrl: './resume-experiences.component.html',
  standalone: false
})
export class ResumeExperiencesComponent {
  @Input() experiences!: {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    summary: string;
    bullets: string[];
    technologies: string[];
  }[];
}
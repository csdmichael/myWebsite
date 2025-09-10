import { Component, Input } from '@angular/core';
import { ExperienceItem } from 'src/models/resume.model';

@Component({
  selector: 'app-resume-experiences',
  templateUrl: './resume-experiences.component.html',
  styleUrls: ['./resume-experiences.component.scss'],
  standalone: false
})
export class ResumeExperiencesComponent {
  @Input() experiences!: ExperienceItem[];
}
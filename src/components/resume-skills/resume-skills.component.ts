import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-skills',
  templateUrl: './resume-skills.component.html',
  standalone: false
})
export class ResumeSkillsComponent {
  @Input() skills!: string[];
}
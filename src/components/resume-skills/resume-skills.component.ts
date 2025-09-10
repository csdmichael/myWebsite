import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-skills',
  templateUrl: './resume-skills.component.html',
  styleUrls: ['./resume-skills.component.scss'],
  standalone: false
})
export class ResumeSkillsComponent {
  @Input() skills!: any[];
}
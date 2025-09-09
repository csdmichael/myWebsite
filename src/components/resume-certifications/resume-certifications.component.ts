import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-certifications',
  templateUrl: './resume-certifications.component.html',
  standalone: false
})
export class ResumeCertificationsComponent {
  @Input() certifications!: string[];
}
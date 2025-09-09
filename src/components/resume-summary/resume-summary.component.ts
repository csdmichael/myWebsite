import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-summary',
  templateUrl: './resume-summary.component.html',
  standalone: false
})
export class ResumeSummaryComponent {
  @Input() summary!: string;
}
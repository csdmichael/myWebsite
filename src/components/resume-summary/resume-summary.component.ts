import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-summary',
  templateUrl: './resume-summary.component.html',
  styleUrls: ['./resume-summary.component.scss'],
  standalone: false
})
export class ResumeSummaryComponent {
  @Input() summary!: string;
  @Input() linkedInUrl!: string;
}
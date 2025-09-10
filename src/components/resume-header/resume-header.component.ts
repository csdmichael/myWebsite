// src/app/components/resume-header/resume-header.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.scss'],
  standalone: false
})
export class ResumeHeaderComponent {
  @Input() name!: string;
  @Input() headline!: string;
  @Input() location!: string;
  @Input() workAuthorization!: string;
  @Input() linkedin!: string;
  @Input() github!: string;
}
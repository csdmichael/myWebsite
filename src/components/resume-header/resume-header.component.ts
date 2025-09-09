// src/app/components/resume-header/resume-header.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  standalone: false
})
export class ResumeHeaderComponent {
  @Input() name!: string;
  @Input() headline!: string;
}
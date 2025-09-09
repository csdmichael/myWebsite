import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeSummaryComponent } from './resume-summary.component';

@NgModule({
  declarations: [ResumeSummaryComponent],
  imports: [CommonModule],
  exports: [ResumeSummaryComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ResumeSummaryModule {}
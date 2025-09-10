import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeEducationComponent } from './resume-education.component';

@NgModule({
  declarations: [ResumeEducationComponent],
  imports: [CommonModule],
  exports: [ResumeEducationComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ResumeEducationModule {}
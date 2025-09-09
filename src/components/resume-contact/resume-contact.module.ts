import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeContactComponent } from './resume-contact.component';

@NgModule({
  declarations: [ResumeContactComponent],
  imports: [CommonModule],
  exports: [ResumeContactComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ResumeContactModule {}
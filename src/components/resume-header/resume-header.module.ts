import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ResumeHeaderComponent } from './resume-header.component';

@NgModule({
  declarations: [ResumeHeaderComponent],
  imports: [CommonModule],
  exports: [ResumeHeaderComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ResumeHeaderModule {}
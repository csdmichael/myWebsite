import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ResumeCertificationsComponent } from './resume-certifications.component';

@NgModule({
  declarations: [ResumeCertificationsComponent],
  imports: [CommonModule],
  exports: [ResumeCertificationsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ResumeCertificationsModule {}
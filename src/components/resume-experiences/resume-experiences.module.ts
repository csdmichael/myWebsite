import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ResumeExperiencesComponent } from './resume-experiences.component';

@NgModule({
  declarations: [ResumeExperiencesComponent],
  imports: [CommonModule],
  exports: [ResumeExperiencesComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ResumeExperiencesModule {}
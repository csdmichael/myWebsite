import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ResumeSkillsComponent } from './resume-skills.component';

@NgModule({
  declarations: [ResumeSkillsComponent],
  imports: [CommonModule],
  exports: [ResumeSkillsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ResumeSkillsModule {}
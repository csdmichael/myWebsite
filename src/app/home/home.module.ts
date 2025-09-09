import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { AppHeaderModule } from 'src/components/app-header/app-header.component.module';
import { RouterModule } from '@angular/router';
import { AppFooterModule } from 'src/components/app-footer/app-footer.component.module';
import { ResumeCertificationsModule } from 'src/components/resume-certifications/resume-certifications.module';
import { ResumeContactModule } from 'src/components/resume-contact/resume-contact.module';
import { ResumeExperiencesModule } from 'src/components/resume-experiences/resume-experiences.module';
import { ResumeHeaderModule } from 'src/components/resume-header/resume-header.module';
import { ResumeSkillsModule } from 'src/components/resume-skills/resume-skills.module';
import { ResumeSummaryModule } from 'src/components/resume-summary/resume-summary.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppHeaderModule,
    AppFooterModule,
    ResumeCertificationsModule, ResumeContactModule, ResumeExperiencesModule, ResumeHeaderModule, ResumeSkillsModule, ResumeSummaryModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomePage]
})
export class HomePageModule {}

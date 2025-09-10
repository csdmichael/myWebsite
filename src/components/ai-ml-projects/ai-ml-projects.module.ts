import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiMlProjectsComponent } from './ai-ml-projects.component';

@NgModule({
  declarations: [AiMlProjectsComponent],
  imports: [CommonModule],
  exports: [AiMlProjectsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AiMlProjectsModule {}
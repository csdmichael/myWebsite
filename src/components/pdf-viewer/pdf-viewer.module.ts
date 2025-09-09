import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PDFViewerComponent } from './pdf-viewer.component';

@NgModule({
  declarations: [PDFViewerComponent],
  imports: [CommonModule],
  exports: [PDFViewerComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PDFViewerModule {}
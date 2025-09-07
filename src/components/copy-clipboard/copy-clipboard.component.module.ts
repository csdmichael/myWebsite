import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyClipboardComponent } from './copy-clipboard.component';
@NgModule({
	declarations: [CopyClipboardComponent],
	imports: [
		CommonModule
	],
	exports: [CopyClipboardComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CopyClipboardModule {}

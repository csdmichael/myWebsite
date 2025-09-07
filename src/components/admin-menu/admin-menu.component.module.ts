import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMenuComponent } from './admin-menu.component';
@NgModule({
	declarations: [AdminMenuComponent],
	imports: [
		CommonModule
	],
	exports: [AdminMenuComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminMenuModule {}

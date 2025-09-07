import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from './google-map.component';
@NgModule({
	declarations: [GoogleMapComponent],
	imports: [
		CommonModule
	],
	exports: [GoogleMapComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GoogleMapModule {}

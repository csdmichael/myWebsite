import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { MapLocationComponent } from './map-location.component';
import { environment } from 'src/environments/environment';
@NgModule({
	declarations: [MapLocationComponent],
	imports: [
		CommonModule,
		AgmCoreModule.forRoot({
			apiKey: environment.googleMapsAPIKey
		  })
	],
	exports: [MapLocationComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MapLocationModule {}

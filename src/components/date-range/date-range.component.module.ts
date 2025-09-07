import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeComponent } from './date-range.component';
import { IonRangeCalendarModule } from '@googlproxer/ion-range-calendar';
@NgModule({
	declarations: [DateRangeComponent],
	imports: [
		CommonModule,
		IonRangeCalendarModule
	],
	exports: [DateRangeComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DateRangeModule {}

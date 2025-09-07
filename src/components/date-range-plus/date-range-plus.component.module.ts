import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangePlusComponent } from './date-range-plus.component';
import { DateRangeModule } from '../date-range/date-range.component.module';
@NgModule({
	declarations: [DateRangePlusComponent],
	imports: [
		CommonModule,
		DateRangeModule
	],
	exports: [DateRangePlusComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DateRangePlusModule {}

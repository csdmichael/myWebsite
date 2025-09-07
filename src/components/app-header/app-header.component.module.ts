import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppHeaderComponent } from './app-header.component';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../services/common/common';
@NgModule({
	declarations: [AppHeaderComponent],
	imports: [
		CommonModule
	],
	exports: [AppHeaderComponent],
	providers: [CommonService],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppHeaderModule {}

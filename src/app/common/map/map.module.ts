import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPage } from './map.page';
import { AppHeaderModule } from 'src/components/app-header/app-header.component.module';
import { RouterModule } from '@angular/router';
import { AppFooterModule } from 'src/components/app-footer/app-footer.component.module';
import { AdminMenuModule } from 'src/components/admin-menu/admin-menu.component.module';
import { GoogleMapModule } from 'src/components/google-map/google-map.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppHeaderModule,
    AppFooterModule,
    GoogleMapModule,
    AdminMenuModule,
    RouterModule.forChild([{ path: '', component: MapPage }])
  ],
  declarations: [MapPage]
})
export class MapPageModule {}

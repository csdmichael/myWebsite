import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsPage } from './terms.page';
import { AppHeaderModule } from 'src/components/app-header/app-header.component.module';
import { RouterModule } from '@angular/router';
import { AppFooterModule } from 'src/components/app-footer/app-footer.component.module';
import { AdminMenuModule } from 'src/components/admin-menu/admin-menu.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppHeaderModule,
    AppFooterModule,
    AdminMenuModule,
    RouterModule.forChild([{ path: '', component: TermsPage }])
  ],
  declarations: [TermsPage]
})
export class TermsPageModule {}

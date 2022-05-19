import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecuritiesPageRoutingModule } from './securities-routing.module';

import { SecuritiesPage } from './securities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecuritiesPageRoutingModule
  ],
  declarations: [SecuritiesPage]
})
export class SecuritiesPageModule {}

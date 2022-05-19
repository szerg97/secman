import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityDetailsPageRoutingModule } from './security-details-routing.module';

import { SecurityDetailsPage } from './security-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecurityDetailsPageRoutingModule
  ],
  declarations: [SecurityDetailsPage]
})
export class SecurityDetailsPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityDetailsPage } from './security-details.page';

const routes: Routes = [
  {
    path: '',
    component: SecurityDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityDetailsPageRoutingModule {}

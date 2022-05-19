import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecuritiesPage } from './securities.page';

const routes: Routes = [
  {
    path: '',
    component: SecuritiesPage,
  children: [
    {
      path: 'discover',
      loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
    },
    {
      path: 'purchased',
      loadChildren: () => import('./purchased/purchased.module').then( m => m.PurchasedPageModule)
    },
    {
      path: 'statistics',
      loadChildren: () => import('./statistics/statistics.module').then( m => m.StatisticsPageModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecuritiesPageRoutingModule {}

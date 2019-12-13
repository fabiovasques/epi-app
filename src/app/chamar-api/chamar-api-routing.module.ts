import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChamarApiPage } from './chamar-api.page';

const routes: Routes = [
  {
    path: '',
    component: ChamarApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChamarApiPageRoutingModule {}

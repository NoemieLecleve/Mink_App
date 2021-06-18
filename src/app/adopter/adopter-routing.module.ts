import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdopterPage } from './adopter.page';

const routes: Routes = [
  {
    path: '',
    component: AdopterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdopterPageRoutingModule {}

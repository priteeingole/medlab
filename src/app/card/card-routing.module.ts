import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardpageComponent } from './cardpage/cardpage.component';

const routes: Routes = [
  {
  path:'cartpage',component:CardpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CardpageComponent } from './card/cardpage/cardpage.component';
import { ConfirmOrderComponent } from './cart/confirm-order/confirm-order.component';
import { HomeComponent } from './component/home/home.component';
import { LabtestComponent } from './labtest/labtest.component';
import { MedicineComponent } from './medicine/medicine.component';
import { PagefoundComponent } from './pagefound/pagefound.component';
import { ViewProductDetailsCategoryComponent } from './view-product-details-category/view-product-details-category.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'medicine',component:MedicineComponent},
  {path:'view-product-details/:drug-code',component:ViewProductDetailsComponent},
  {path:'view-product-details-category',component:ViewProductDetailsCategoryComponent},
  {path:'cardpage',component:CardpageComponent},//cartcomponent 
  {path:'book-details',component:BookDetailsComponent},//checkout click button open book-details
  {path:'confirm-order',component:ConfirmOrderComponent},
  //{path:'labtest',component:LabtestComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

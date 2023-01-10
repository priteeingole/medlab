import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { PagefoundComponent } from './pagefound/pagefound.component';
import { MedicineComponent } from './medicine/medicine.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';
import { ViewProductDetailsCategoryComponent } from './view-product-details-category/view-product-details-category.component';
import { LabtestComponent } from './labtest/labtest.component';
import { LoginModule } from './login/login.module';
import { CardModule } from './card/card.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ConfirmOrderComponent } from './cart/confirm-order/confirm-order.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        PagefoundComponent,
        MedicineComponent,
        ViewProductDetailsComponent,
        ViewProductDetailsCategoryComponent,
        LabtestComponent,
        BookDetailsComponent,
        ConfirmOrderComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        CarouselModule,
        ReactiveFormsModule,
        LoginModule,
        CardModule
     
    ]
})
export class AppModule { }

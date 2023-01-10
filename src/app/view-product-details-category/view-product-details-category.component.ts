import { Component, OnInit } from '@angular/core';
import { CartService } from '../card/cart.service';
import { HttpserviceService } from '../core/http/http.service';

@Component({
  selector: 'app-view-product-details-category',
  templateUrl: './view-product-details-category.component.html',
  styleUrls: ['./view-product-details-category.component.scss']
})
export class ViewProductDetailsCategoryComponent implements OnInit {
  topDealsByCategory:any;

constructor(private http:HttpserviceService,private cart:CartService){}

  ngOnInit(): void {
    this.getTopDealsByCategory();
  }
  getTopDealsByCategory(){                                                //any remove krke real project inteface use karna hai
    this.http.getDetailsFromServer('top-deals-by-category').subscribe((response:any)=>{
     if(response && response.length > 0){
       this.topDealsByCategory = response ;
     }                                    //top-deals-by-category db.json code hai array name
    })
 }
  
  ADDTOCart(product:any){
   this.cart.ADDTOCart(product);
  
  }
}

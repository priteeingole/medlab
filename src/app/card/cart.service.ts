import { Injectable } from '@angular/core';
import { SharedserviceService } from '../shared/sharedservice.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private orderObj:any;
constructor(private shared:SharedserviceService) { }
   ADDTOCart(product:any){

  //   //first check the addcart already addthe item ,then card mein item nhi rkh gye toh item add hogye 
    var products:any;
     // product liya hai 
    products=localStorage.getItem("products");
    products=JSON.parse(products);
   if(!products){
     //
     products=[];
    }
  
    products.push(product);
    localStorage.setItem("products",JSON.stringify(products));
     this.shared.emitSelProduct.next(products.length); 
   }
   setOrder(order:any){
    this.orderObj = order;
  }

  getOrder(){
    return this.orderObj ;
  }

  removeProductsFromLocalStorage(){
    localStorage.removeItem('products');
  }

}
//product[]- card item nhi rkh gya toh blank arry krke push kr rhe hai 
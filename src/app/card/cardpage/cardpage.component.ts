import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.scss']
})
export class CardpageComponent implements OnInit {
  cartItems:any;
  orberObj:Order=new Order();
  
  constructor(private router:Router,private cart:CartService) { }

  ngOnInit(): void {
    //call kr rhe hai
    this. getProductsFromLocalStorage();
    this.setCartItems();
    this.setOrderDetails();
  }
 

  setCartItems(){
    ///one by one item irretre kr rhe hai
    var productList: any = [] //object crete kiya hai
    this.cartItems.forEach((item: any) => {
      var productObj = new Product();
      productObj.description = item.description;
      productObj.actualPrice = item.actualPrice;
      productObj.brand = item.brand;
      productObj.drugCode = item.drugCode;
      productObj.discountPrice = item.discountPrice;
      productObj.quantity = 1 ;
      productObj.totalAmount = (item.discountPrice *  productObj.quantity);
      productObj.type = item.type;
      productList.push(productObj);
    });
    return productList;
  }
  setOrderDetails(){
    this.orberObj.orderId = this.generateRandomNumber();
    this.orberObj.products = this.setCartItems();
    this.calculateTotalPrice();
  }
  calculateTotalPrice(){
    this.orberObj.totalAmount = 0 ;
    this.orberObj.totalDiscount = 20 ;
    this.orberObj.products.forEach((item)=>{
      this.orberObj.totalAmount += Number(item.totalAmount);
    });

    this.orberObj.finalAmount = this.orberObj.totalAmount - this.orberObj.totalDiscount; 

  }
  
// incement object,decementobject 
quantityChange(type: string, index:number){
    var selectProduct = this.orberObj.products[index];
    if (type == 'Positive') {
      ++selectProduct.quantity;
    } else {
      --selectProduct.quantity;
      if (selectProduct.quantity < 1) {
        var isConfirm = confirm("Are you sure");
        if (isConfirm) {
          this.orberObj.products.splice(index, 1);
        }else {
          ++selectProduct.quantity
        }
      }
    }
    selectProduct.totalAmount = selectProduct.quantity * selectProduct.discountPrice;
    this.calculateTotalPrice();
  }
 
 generateRandomNumber(){ //id generte random
    return Math.floor(100000 + Math.random() * 900000);
   }
  //get localstroge data available
  getProductsFromLocalStorage(){
    var products:any ;
    products = localStorage.getItem("products");
    if(!products){
     this.cartItems = []; //localstroge data nhi hai empty liya h
    }else {
      this.cartItems = JSON.parse(products);
    }
  }
  checkout(){
    this.cart.setOrder(this.orberObj);
    this.router.navigate(['/book-details'])
  }
}

export class Order {
  orderId!:number;
  fullName!:string;
  totalAmount!:number;
  totalDiscount!: number;
  mobileNo!:number;
  emailId!:string;
  totalitems!:number;
  finalAmount!:number;
  deliveryType!:string;
  oAddress:Address=new Address();
  products:Product[]=[];
}
 //address object 
export class Address {
  city!:string;
  pincode!:number;
  state!:string;
  line1!:string;
  line2!:string;
}
//product object
export class Product {
  drugCode!:number;
  totalAmount!:number;
  actualPrice!:number;
  discountPrice!:number;
  description!:string;
  quantity!:number;
  brand!:string;
  type!:string;
}



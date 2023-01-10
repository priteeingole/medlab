import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../card/cart.service';
import { HttpserviceService } from '../core/http/http.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  bookingForm!:FormGroup;
  finalOrder:any;
  constructor(private fb:FormBuilder,private cart:CartService,private http:HttpserviceService,private router:Router) {
  this.finalOrder = this.cart.getOrder();
   }

  ngOnInit(): void {
    this.createForm();

  }

  createForm(){
    this.bookingForm = this.fb.group({
      'fullName':[''],
      'mobileNo':[''],
      'gender':[''],
      'dob':[''],
      'emailId':[''],
      'address':this.fb.group({
        'line1':[''],
        'line2':[''],
        'landmark':[''],
        'pincode':[''],
        'city':[''],
        'state':[] 
      }) 
    })
  }

  bookOrder(){
   console.log('form',this.bookingForm.value);
   var obj = this.bookingForm.value;
   
   var orderObj = {
    "orderId":this.finalOrder.orderId,
    "fullName":this.bookingForm.controls['fullName'].value,
    "totalAmount":this.finalOrder.totalAmount,
    "totalDiscount": this.finalOrder.totalDiscount,
    "mobileNo":this.bookingForm.controls['mobileNo'].value,
    "emailId":this.bookingForm.controls['emailId'].value,
    "totalitems":this.finalOrder.totalitems,
    "finalAmount":this.finalOrder.finalAmount,
    "gender":this.bookingForm.controls['gender'].value,
    "deliveryType":"Online",
    "oAddress":this.bookingForm.controls['address'].value,
    "products":this.finalOrder.products
   }
  
  this.http.postTopsFromServer('orders',orderObj).subscribe((response)=>
  {
    if(response){      //redirect page successful
      this.cart.removeProductsFromLocalStorage();
      this.router.navigate(['/confirm-order'])
     
    }
  })

}
}
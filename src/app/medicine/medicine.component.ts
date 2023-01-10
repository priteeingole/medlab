
import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../card/cart.service';
import { HttpserviceService } from '../core/http/http.service';


@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
  topDeals:any;
  pincode!:string;
  isPinCodeAvailable:boolean = false ;
   pincodeDetails:any;
  

   @ViewChild('closeBtn',{read:ElementRef}) closeBtn!:ElementRef
  
constructor(private http:HttpserviceService,private cart:CartService) { }
  
  ngOnInit(): void {
    this.getTopDeals();
  }

  getTopDeals(){               
this.http.getTopsFromServer("top-deals").subscribe((response:any) =>
{if(response&&response.length>0){
  this.topDeals=response;
}

 })
  }
  getPackageDetailsByPincode() {
    
     if (this.pincode && this.pincode.length == 6) {
       const httpParams: HttpParams = new HttpParams()
         .set('pincode', this.pincode);

       this.http.getDetailsFromServer('pincodeDetails', httpParams).subscribe((response: any) => {
         console.log("working");
        if (response && response.length > 0) {
           this.isPinCodeAvailable = true;
          this.pincodeDetails = response[0];
          if (this.closeBtn) {
             this.closeBtn.nativeElement.click(); //modal box close code
          }
        } else {
          this.isPinCodeAvailable = false;
        }
      },
        (        error: any) => {
           console.log(error);
        })
     }
    
  }  
          //carsoule code hai 
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  ADDTOCart(product:any){
     this.cart.ADDTOCart(product);
    
   }
  
  }

  














import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from '../core/http/http.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.scss']
})
export class ViewProductDetailsComponent implements OnInit {
  productDetails: any;

  constructor(private route:ActivatedRoute ,private http:HttpserviceService) { }

  ngOnInit(): void { 
    // current value drugcode send  
    const drugCode:any = this.route.snapshot.paramMap.get('drug-code');
    if(drugCode != null){
      this.getProductDetailsByDrugCode(drugCode);
    }

  } 
getProductDetailsByDrugCode(drug_code:string){      //doubt
    const params:HttpParams = new HttpParams()
                              .set('drugCode',drug_code);
    
    this.http.getDetailsFromServer('top-deals',params).subscribe((response:any)=>{
      if(response && response.length > 0){
        this.productDetails = response[0]
      }
    })                          
    

    } 

}

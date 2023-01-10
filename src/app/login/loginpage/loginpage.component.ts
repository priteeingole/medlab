import { HttpParameterCodec, HttpParams } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpserviceService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  isNewUser:boolean=true;
  loginForm!:FormGroup;
  @Output()
  signInSuccess:EventEmitter<boolean> = new EventEmitter(false);
  
  constructor(private fb:FormBuilder,private http:HttpserviceService) { }

  ngOnInit(): void {
    this.createFrom();
  }
  createFrom(){
    this.loginForm=this.fb.group({
      'mobileNo':['',[Validators.required]],
      'password':['',[Validators.required]]
    })
  }
  login(){
    console.log(this.loginForm.controls['mobileNo'].value);
    //loginapi call
    //localhost:3000/user?mobile=34566&password=welocm234
    const params:HttpParams=new HttpParams()
    .set('mobileNo',this.loginForm.controls['mobileNo'].value)
    .set('password',this.loginForm.controls['password'].value)

    this.http.getDetailsFromServer('user',params).subscribe((response:any)=>{
      
      if(response && response.length > 0){
        console.log("working");
        var user= response[0];
        const token ="123456";
        //user['token']="FGYHIKTGTG"; //session strogae data expire 
        user['authToken'] = token ; 
        localStorage.setItem('authToken',token)
        localStorage.setItem('user',JSON.stringify(user));//localstrage data store and data 5mb ya 2b (datastore)
        this.isNewUser=false;
        this.signInSuccess.emit(true);
       } else{
        this.isNewUser=true;
       }
  })
  }
}
//token present hai token login kiya hai aur token present nhi toh token login hai 
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { HttpserviceService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  
  isGetOtp:boolean=false;
  
  otpGenerated!:number;
  otpTimer!:number;
  signUpForm!:FormGroup;
  sub!: Subscription;
  isVerifyOtp: boolean=false;
 
  constructor(private fb:FormBuilder,private http:HttpserviceService ) { }

  ngOnInit(): void {
    this.createSignupForm();

  }
createSignupForm(){
  this.signUpForm=this.fb.group({
    'userName':['',[Validators.required]],
    'mobileNo':['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
    'password':['',[Validators.required]],
    'isMobileNoVerified':[false,[]]
  })
}
getOtp(){
  this.isGetOtp = true ;
  // //generated 4 digit random number
  this.otpGenerated = Math.floor(1000 + Math.random() * 9000);
  console.log(this.otpGenerated);

  //optteimer 60min valid optnmuber---code
  var emittedNo = interval(1000);
  this.sub = emittedNo.subscribe((res: any) => {
    this.otpTimer = 60 - res;
    if (this.otpTimer == 0) {  
      this.sub.unsubscribe();
    }
  })

}
verifyOtp(otpEntered:any){     ////opttimer stop the code unSubscription
  if(otpEntered == this.otpGenerated){
    this.isVerifyOtp = true ;
    this.isGetOtp = false ;
    this.signUpForm.controls['isMobileNoVerified'].setValue(true);
    this.sub.unsubscribe();
  }
}
signUp(){
  if(this.isVerifyOtp){
console.log(this.signUpForm.value);
this.http.postTopsFromServer('user',this.signUpForm.value).subscribe((response:any)=>{
  if(response && response.length > 0){
      console.log(response);
  }
})
}
}
}



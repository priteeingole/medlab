import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { SharedserviceService } from 'src/app/shared/sharedservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  CurrentName:string="SignIn";
  loggedUserDetails:any;
  isLoginSuccess:boolean = false;
  cardCount!:Observable<number>
  

  //closetabbutton
   @ViewChild('closeBtn',{'read':ElementRef}) closeBtn!:ElementRef;
   @ViewChild(' loginBtn',{'read':ElementRef})  loginBtn!:ElementRef;
  constructor(private auth:AuthenticationService,private shared:SharedserviceService,private router:Router) { }
   
  ngOnInit(): void {                   
    this.loggedUserDetails = this.auth.getUser();
    if(this.auth.getToken()){
      this.isLoginSuccess = true ;
    }
    this.cardCount=this.shared.cartobs;
  }

  changeAction(action:string){
    this.CurrentName = action;
  }
  handleLoginSuccess(flag:boolean){   //loginpage () //doubt
    if(flag){
      this.isLoginSuccess = true ;
      this.loggedUserDetails = this.auth.getUser();
       this.closeBtn.nativeElement.click();
    }
  
  }
  redirectToCart(){ 
    if(this.isLoginSuccess){
       this.router.navigate(['/cardpage'])
    }else{
            this.loginBtn.nativeElement.click();
    }
  }
}

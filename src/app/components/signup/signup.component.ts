import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { NgIf } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { jwtDecode } from 'jwt-decode';
import { TokenService } from '../../config/token/token.service';



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,NgIf,GoogleSigninButtonModule,RouterLink,RouterOutlet,FontAwesomeModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  providers:[]
})
export class SignupComponent {
   isRegisterActive:boolean=true;
   username:string='';
   email:string='';
   password:string='';
   userLoginData:any;
   
   activeSignIn(){
     this.isRegisterActive=!this.isRegisterActive;
    
   }
   activeSignUp(){
    this.isRegisterActive=!this.isRegisterActive;
   
   }
   constructor(private router: Router,
    private socialAuthService: SocialAuthService,private tokenService: TokenService) {
    
  }
  // constructor(private tokenService: TokenService) {}
  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {

      this.userLoginData = user;
      // const auth=new TokenService();
      console.log(user)
      if(user){
      this.tokenService.setToken(user.idToken);
      this.router.navigate(['mainpage']);
      }else{
        this.tokenService.setToken('');
      }    
    });
  }
}







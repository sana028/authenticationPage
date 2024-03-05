import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {  SocialAuthService,GoogleSigninButtonModule, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { NgIf } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { jwtDecode } from 'jwt-decode';
import { TokenService } from '../../config/token/token.service';
import { ApiserviceComponent } from '../apiservice/apiservice.component';
import { AuthConfig } from 'angular-oauth2-oidc';


const authConfig: AuthConfig = {
  clientId: '137441761832-79qkqb7lojnkpltfieg6dp4u7dgqgea0.apps.googleusercontent.com', // Replace with your Google Console Client ID
  redirectUri: 'http://localhost:4200', // Replace with your redirect URI
  responseType: 'code',
};

// const config: SocialAuthServiceConfig = {
//   autoLogin: false,
//   providers: [
//     {
//       id: GoogleLoginProvider.PROVIDER_ID,
//       provider: new GoogleLoginProvider('Your-Google-Client-Id'),
//     },
//   ],
// };

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,NgIf,GoogleSigninButtonModule,RouterLink,RouterOutlet,FontAwesomeModule,ApiserviceComponent],
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
    private socialAuthService: SocialAuthService,private tokenService: TokenService,) {
    
  }

  // async exchangeIdTokenForAccessToken(idToken: string): Promise<any> {
  //   const url = 'https://oauth2.googleapis.com/token';
  //   const clientId = '137441761832-79qkqb7lojnkpltfieg6dp4u7dgqgea0.apps.googleusercontent.com'; // Replace with your Google Cloud project's client ID
  //   const clientSecret = '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'; // Replace with your Google Cloud project's client secret (keep confidential)
  //   const redirectUri = 'http://localhost:4200'; // Replace with your redirect URI specified during Google Sign-In setup
  
  //   const data = {
  //     grant_type: 'authorization_code',
  //     client_id: clientId,
  //     client_secret: clientSecret,
  //     redirect_uri: redirectUri,
  //     code: idToken
  //   };
  
  //   try {
  //     const response = await this.http.post(url, data, { observe: 'response' }).toPromise();
  
  //     if (response?.status === 200) {
  //       return response.body; // Access token and other information
  //     } else {
  //       throw new Error(`Error exchanging ID token: ${response?.statusText}`);
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // constructor(private tokenService: TokenService) {}
  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {

      this.userLoginData = user;
      // const auth=new TokenService();
      // this.exchangeIdTokenForAccessToken(user.idToken)
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







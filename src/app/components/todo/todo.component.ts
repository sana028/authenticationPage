import { Component ,Input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule,NgClass,NgIf } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormControlName,NgForm} from '@angular/forms';
import { TokenService } from '../../config/token/token.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,CommonModule,NgClass,NgIf,FormsModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  idToken:any;
  isFlipped:boolean=false;
  hide:boolean=true;
  name:string="";
  hideConfirm:boolean=true;
  email = new FormControl('', [Validators.required, Validators.email]);
  // http: any;
  constructor(private tokenService: TokenService, private http: HttpClient,) {}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  flipTheCard(){
    this.isFlipped=!this.isFlipped;
  }

  async exchangeIdTokenForAccessToken(idToken: string): Promise<any> {
    const url = 'https://oauth2.googleapis.com/token';
    const clientId = '137441761832-79qkqb7lojnkpltfieg6dp4u7dgqgea0.apps.googleusercontent.com'; // Replace with your Google Cloud project's client ID
    const clientSecret = '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'; // Replace with your Google Cloud project's client secret (keep confidential)
    const redirectUri = 'http://localhost:4200'; // Replace with your redirect URI specified during Google Sign-In setup
  
    const data = {
      grant_type: 'authorization_code',
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code: idToken
    };
  
    try {
      const response = await this.http.post(url, data, { observe: 'response' }).toPromise();
  
      if (response?.status === 200) {
        return response.body; // Access token and other information
      } else {
        throw new Error(`Error exchanging ID token: ${response?.statusText}`);
      }
    } catch (error) {
      throw error;
    }
  }
  
 
  async getUserProfile(idToken:any) {
    const accessToken = idToken;
  
    try {
      const response = await fetch('https://people.googleapis.com/v1/people/me?personFields=emailAddresses,names,photos', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      const profileData = await response.json();
      console.log(profileData); // Access user profile information
    } catch (error) {
      console.error(error);
    }
  }

  onSubmit(data: NgForm){
    if(data.value.name && data.value.password && data.value.confirmPassowrd && data.value.email)
    {
     
      this.idToken=this.tokenService.getToken();
      this.exchangeIdTokenForAccessToken(this.idToken);
      const apiurl='http://localhost:8080/api/create.php';
      const responseData={
       name:data.value.name,
       email:data.value.email,
       password:data.value.password
      }
      this.http.post(apiurl,responseData,{
       headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${this.idToken}`,
       },
      }).subscribe(
       (response) => {
         // Handle POST response
       },
       (error) => {
         // Handle POST error
         console.log(error);
       }
      )
      
    }

   }
  
}

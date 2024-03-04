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
  
  onSubmit(data: NgForm){
     console.log(data.value,data.value.name && data.value.password && data.value.confirmPassowrd && data.value.email);
   if(data.value.name && data.value.password && data.value.confirmPassowrd && data.value.email)
   {
    
     console.log(this.tokenService.getToken(),this.tokenService.isTokenExpired());
     this.idToken=this.tokenService.getToken();
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

import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { TodoComponent } from '../todo/todo.component';
import { ActivatedRoute } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [NgIf,UserDetailsComponent,TodoComponent,HttpClientModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {
    isHomeVisible:boolean=false;
    isTodoListVisible:boolean=false;
    isReviewVisible:boolean=false;

    // constructor(private route: ActivatedRoute) {}
    // ngOnInit() {
    //   this.idToken = this.route.snapshot.queryParams['idToken'];
    //   if(this.idToken)
    //   {const decodedToken=jwtDecode(this.idToken);
    //   const expirationTime =(decodedToken?.exp || 1) * 1000;
    //   const expireTime=new Date(expirationTime);
    //   const formatter = new Intl.DateTimeFormat('en-US', {
    //     hour: '2-digit',
    //     minute: '2-digit'
    //   });
    // this.formattedTime = formatter.format(expireTime);
    // }
    // }

    getUserDetails(){
      this.isHomeVisible=true;
      this.isReviewVisible=false;
      this.isTodoListVisible=false;
    }

    goToDopage(){
      this.isHomeVisible=false;
      this.isTodoListVisible=true;
      this.isReviewVisible=false;
    }

    giveReview(){
      this.isHomeVisible=false;
      this.isTodoListVisible=false;
      this.isReviewVisible=true;
    }
}

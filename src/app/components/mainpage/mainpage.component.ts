import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { TodoComponent } from '../todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from '../../config/people/people.service';


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

   constructor(private gapi:PeopleService){}
  //  ngOnInit(){
  //   gapi.load('client', this.gapi.initializeGapiClient);
  //  }

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

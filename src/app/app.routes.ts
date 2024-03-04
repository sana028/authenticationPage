import { Routes,RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'sign-up',component:SignupComponent},
    {path:'mainpage',component:MainpageComponent }
];

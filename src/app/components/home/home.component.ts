import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    MatSlideToggle,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    FooterComponent,
    NgbModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}

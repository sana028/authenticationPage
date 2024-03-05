import { Component } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';

@Component({
  selector: 'app-apiservice',
  standalone: true,
  imports: [],
  templateUrl: './apiservice.component.html',
  styleUrl: './apiservice.component.scss'
})
export class ApiserviceComponent {
  clientId="137441761832-79qkqb7lojnkpltfieg6dp4u7dgqgea0.apps.googleusercontent.com";
  apiKey="AIzaSyBzD6oJDkh6SjM3eW4HjtnwpXZWqO89CW0";
  SCOPES = 'https://www.googleapis.com/auth/userinfo.profile';
  DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/people/v1/rest';
  gapiInited=false;
  constructor(private gapi:GoogleApiService){}

  initializeGapiClient() {
      gapi.client.init({
        apiKey: this.apiKey,
        discoveryDocs: [this.DISCOVERY_DOC],
      });
      this.gapiInited = true;
      // maybeEnableButtons();
    }

  }


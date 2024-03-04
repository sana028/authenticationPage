import { Injectable } from '@angular/core';
import {GoogleApiService} from 'ng-gapi'

@Injectable({
  providedIn: 'root',
})
export class PeopleService {

  constructor(private gapiService: GoogleApiService) {}
  public authenticate(): Promise<void> {
    return this.gapiService.onLoad().toPromise().then(() => {
      return this.gapiService.getClient({
        clientId: 'YOUR_CLIENT_ID',
        scope: 'https://www.googleapis.com/auth/contacts.readonly', // Adjust scope based on your needs
        discoveryDocs: ['https://people.googleapis.com/$discovery/rest?version=v1'],
      });
    });
  }
}

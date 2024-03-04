import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private idToken: string | null = null;

  setToken(token: string): void {
    this.idToken = token;
    // Convert seconds to milliseconds
  }

  getToken(): string | null {
    console.log(this.idToken);
    return this.idToken;
  }

  isTokenExpired(): boolean {
    if(this.idToken){
    const decodedToken=jwtDecode(this.idToken);
      const expirationTime =(decodedToken?.exp || 1) * 1000;
      const expireTime=new Date(expirationTime);
      const formatter = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      });
    const formattedTime = Number(formatter.format(expireTime));
    return formattedTime !== null && new Date().getTime() > formattedTime;
    }
    return  false;
  }
}

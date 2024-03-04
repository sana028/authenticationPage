import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

const config: SocialAuthServiceConfig = {
  autoLogin: false,
  providers: [
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('Your-Google-Client-Id'),
    },
  ],
};


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgbModule,
    SocialLoginModule
    
  ],
  schemas:[],
  bootstrap:[
    NgbModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: config,
    },
  ]
})
export class AppModule { }

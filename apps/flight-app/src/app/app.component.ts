import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { TranslateService } from '@ngx-translate/core';
import { LoggerService } from 'logger-lib';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(
    private loggerService: LoggerService,
    private oauthService: OAuthService,
    private router: Router,
    private translate: TranslateService
  ) {

    this.loggerService.log('log');
    this.loggerService.debug('debug');
    
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');

    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();


  }
}


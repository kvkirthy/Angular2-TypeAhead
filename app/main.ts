import {bootstrap} from 'angular2/platform/browser';
import {FORM_PROVIDERS} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [FORM_PROVIDERS, HTTP_PROVIDERS]);
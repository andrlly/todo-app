import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
      <app-header></app-header>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
  }
}

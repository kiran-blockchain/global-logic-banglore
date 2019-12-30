import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:`<app-navbar></app-navbar>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazon';
  selectedLang="en";
  constructor(public translate:TranslateService){
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? this.selectedLang : 'en');
  }

  changeLanguage(){
    this.translate.use(this.selectedLang);
  }
}

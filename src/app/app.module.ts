import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/http';
//Routing Step -1
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NavBarComponent } from './navarbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { DataService } from './services/data.service';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';
import { SearchPipe } from './pipes/search.pipe';
import { LoginComponent } from './login/login.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HoverDirective } from './hover.directive';
import { RestrictDirective } from './restrict.directive';

//i8N
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FilterdataPipe } from './filterdata.pipe';
import { Dropdown2Component } from './dropdown2/dropdown2.component';
import { ChangecolorDirective } from './changecolor.directive';
import { DatepickerDirective } from './datepicker.directive';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    ProductsComponent,
    SearchPipe,
    LoginComponent,
    DropdownComponent,
    HoverDirective,
    RestrictDirective,
    FilterdataPipe,
    Dropdown2Component,
    ChangecolorDirective,
    DatepickerDirective
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,//*including the forms module to the app
    HttpClientModule,
    RouterModule.forRoot([
      {path:"register",component:RegisterComponent},
      {path:"products",component:ProductsComponent},
      {path:"login",component:LoginComponent},
      { path: '', redirectTo: 'register', pathMatch: 'full' },
    ]),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [DataService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navarbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { DataService } from './services/data.service';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    ProductsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,//*including the forms module to the app
    HttpClientModule
  ],
  providers: [DataService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

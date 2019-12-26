import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//Routing Step -1
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NavBarComponent } from './navarbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { DataService } from './services/data.service';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    ProductsComponent,
    SearchPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,//*including the forms module to the app
    HttpClientModule,
    RouterModule.forRoot([
      {path:"register",component:RegisterComponent},
      {path:"products",component:ProductsComponent},
      { path: '', redirectTo: 'register', pathMatch: 'full' },
    ])
  ],
  providers: [DataService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

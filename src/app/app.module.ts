import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { LoginComponent } from './login/login.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    ProductsComponent,
    SearchPipe,
    LoginComponent,
    DropdownComponent
    
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
    ])
  ],
  providers: [DataService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

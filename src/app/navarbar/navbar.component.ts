import { Component } from "@angular/core";
import { ProductService } from '../services/product.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html"
})
export class NavBarComponent {
  title: String; //Declaration
  details:any;
  cart:any;
  constructor(private productSvc:ProductService) {
      //Assignment 
    this.title = "Global Loigc";
    this.details={
        title:'Global Logic',
        navItems:[
            "Home",
            "Products",
            "Cart"
        ]
    };
    this.cart = this.productSvc.cart;
  }
}

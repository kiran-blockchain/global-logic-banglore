import { Component } from "@angular/core";
import { ProductService } from "../services/product.service";

import { range } from "rxjs";
import { map, filter } from "rxjs/operators";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html"
})
export class NavBarComponent {
  title: String; //Declaration
  details: any;
  cart: any;
  counter = 0;
  constructor(
    private productSvc: ProductService,
    private dataSvc: DataService
  ) {
    //Assignment
    this.title = "Global Loigc";
    this.details = {
      title: "Global Logic",
      navItems: [
        { name: "Home", link: "" },
        {name:"Register",link:'/register'},
        { name: "Products", link: "/products" },
        { name: "Cart", link: "/cart" }
      ]
    };
    //this.cart = this.productSvc.cart;
    this.rxExample();
    this.cart =[];

    this.productSvc.myObserver().subscribe(result => {
      console.log(result);
      this.cart.push(result);
    });
  }
  rxExample() {
    range(1, 200)
      .pipe(
        filter(x => x % 2 === 1),
        map(x => x + x)
      )
      .subscribe(x => {
        console.log(x);
      });
  }
}

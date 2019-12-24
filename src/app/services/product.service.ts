import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  public products: any;
  public cart:any;
  constructor() {
    this.products = [
      { id: 1, name: "iPhone", price: 20000, quantity: 0 },
      { id: 2, name: "samsung", price: 40000, quantity: 0 },
      { id: 3, name: "Nokia", price: 50000, quantity: 0 }
    ];
    this.cart =[];
  }

  addToCart (item){
    this.cart.push(item);
  }
  
}

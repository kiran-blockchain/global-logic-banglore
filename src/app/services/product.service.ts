import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ProductService {
  public products: any;
  public cart:any;
  
  public shopping = new Subject<any>();
  
  
  constructor() {
    this.products = [
      { id: 1, name: "iPhone", price: "20000", quantity: 0 ,shippingDate:'12-11-2019'},
      { id: 2, name: "samsung", price: "40000", quantity: 0,shippingDate:'12-11-2019' },
      { id: 3, name: "Nokia", price: "50000", quantity: 0,shippingDate:'12-1-2019'}
    ];
    this.cart =[];
  }

  addToCart (item){
    //this.cart.push(item);
    //trigger the event
    this.shopping.next(item);
  };

  myObserver(){
    //trigger the data
    return this.shopping.asObservable();
  }
  
}













import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/product.service";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  productList: any;
  searchCriteria: any;
  productTypes: any;
  constructor(private productSvc: ProductService) {
    this.productSvc.myObserver().subscribe(result => {
      console.log(result);
      this.productTypes = [
        { label: "Electronics", value: "el" },
        {
          label: "Apparel",
          value: "ap"
        },
        { label: "Home Appliances", value: "ha" }
      ];
    });
  }

  ngOnInit() {
    this.productList = this.productSvc.products;
  }
  addToCart(item) {
    this.productSvc.addToCart(item);
  }
}

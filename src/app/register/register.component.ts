import { Component, OnInit, OnChanges } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit, OnChanges {
  userDetails: any;
  countryList: Array<any>;
  constructor(private dataSvc: DataService) {
    this.userDetails = {
      email: "",
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      country: "",
      agreeTerms: false
    };
    this.countryList = new Array<any>();
  }
  register() {
    console.log(this.userDetails);
  }

  ngOnInit() {}
  ngOnChanges() {
 
  }
  oninputChange(){
    this.getCountriesCall();
  }
  getCountriesCall() {
    this.dataSvc.getCountries().subscribe(
      (result: any) => {
        this.countryList = result;
      },
      err => {
        console.log(err);
      }
    );
  }
}

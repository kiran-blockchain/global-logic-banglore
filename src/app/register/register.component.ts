import { Component, OnInit } from "@angular/core";
import { DataService } from '../services/data.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  userDetails: any;
  countryList:Array<any>;
  constructor(private dataSvc:DataService) {
    this.userDetails = {
      email: "",
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      country: "",
      agreeTerms: false
    };
    this.countryList= new Array<any>();
  }
  register() {
    console.log(this.userDetails);
  }

  ngOnInit() {
    this.countryList = this.dataSvc.countryList;
  }
}

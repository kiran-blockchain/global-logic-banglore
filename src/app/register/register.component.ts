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
  newList:Array<any>;
  emailExp =/^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|( ".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/igm;
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

  ngOnInit() {
    this.getCountriesCall();
  }
  ngOnChanges() {
    
  }
  oninputChange(){
    this.getCountriesCall();
  }
  handleCountryChange(e){
    console.log('Parent Component',e);
  }
  getCountriesCall() {
    this.dataSvc.getCountries().subscribe(
      (result: any) => {
        this.countryList = result;
        this.newList = result.map(x=>{
          return {text:x.name,value:x.alpha2Code}
        });
        console.log(this.newList);
      },
      err => {
        console.log(err);
      }
    );
  }
}

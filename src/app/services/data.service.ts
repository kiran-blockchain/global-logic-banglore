import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  public countryList: any;
  constructor(private http: HttpClient) {
    this.countryList = [];
    this.getCountries();
  }
  getCountries() {
    // this.http
    //   .get("https://restcountries.eu/rest/v2/all")
    //   .toPromise()
    //   .then((result: any) => {
    //     this.countryList= result;
    //     console.log(this.countryList);
    //   })
    //   .catch((err: any) => {
    //     console.log(err);
    //   });
   return  this.http.get("https://restcountries.eu/rest/v2/all");
    // .subscribe(
    //   result => {
    //     this.countryList =result;
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }
}

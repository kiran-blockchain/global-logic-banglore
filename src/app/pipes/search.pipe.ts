import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(inputData:any,item:string, criteria: any): any {
    if (inputData.length == 0 || criteria=='') {
      return inputData;
    }
    else{
     return  inputData.filter(x=>x[item].toString()
     .includes(criteria))
    }
    return null;
  }
}
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

  transform(inputData: any,criteria): any {
    if(!criteria){
      return inputData;
    }
    else{
     return  inputData.filter(item=>{
       return item.price.toString().includes(criteria)
       ||item.name.toLowerCase().includes(criteria.toLowerCase());
     })
    }
  }

}

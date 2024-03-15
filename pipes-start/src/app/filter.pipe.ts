import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStr:string,propName:string): any {
    if(value.length===0 || filterStr.length ===0) return value;
    const results=[];
    for(const item of value){
      
      if(item[propName]===filterStr){
        results.push(item);
      }
    }
    return results;
  }

}

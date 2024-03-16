import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:false
})
export class SortPipe implements PipeTransform {

  transform(value: any,propName:string): any {
    return value.length ===0?value:this.getSortedElements(value,propName);
  }

  private getSortedElements(value: any,propName:string) {
    return value.sort((a,b)=>a[propName]>b[propName]? 1:-1);
  }
}

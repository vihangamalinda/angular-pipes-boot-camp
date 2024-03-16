import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure:false
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
   return value.length ===0?value:this.getReverseString(value);
  }

  private getReverseString(value: string) :string{
    const characterStr:string[] = value.split('');
    return characterStr.reverse().join('');
  }
}

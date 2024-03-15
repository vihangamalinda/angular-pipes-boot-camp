import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone:false,
    name:'shortenPipe'
})
export class ShortenPipe implements PipeTransform{
    transform(value:any) {
      return  (value.length>15)?
         value.substr(0,15)+'...':value;
    }
}
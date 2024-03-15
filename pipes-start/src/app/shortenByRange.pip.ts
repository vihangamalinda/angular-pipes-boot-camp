import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone:false,
    name:'shortenByRange'
})
export class ShortenByRangePipe implements PipeTransform{

    transform(value:any,endLimit:number) {
        return value.length >endLimit ? value.substr(0,endLimit):value;
    }
}
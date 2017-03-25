import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limitTo'
})
export class LimitToPipe implements PipeTransform{
    transform(input: any, limit: number){
        return input.filter(function (elem, index, array){
            if(index<limit){
                return elem;
            }
        })
    }
}

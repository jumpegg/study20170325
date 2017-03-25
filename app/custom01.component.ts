import {Pipe} from '@angular/core';

@Pipe({
    name: 'replace'
})
export class ReplacePipe{
    transform(input,search,newvalue){
        return input.replace(search, newvalue);
    }
}

import { Component } from '@angular/core';

@Component({
    templateUrl: './app/sub04.component.html'
})
export class Sub04Component {
    object: Object = {name: 'Angular', version: 2, currentPipe: {name: 'json 파이프', test: ['a', 1]}};
    jsonString: string = JSON.stringify(this.object);

    e: number = 2.7182;
    pi : number = 3.141;
}

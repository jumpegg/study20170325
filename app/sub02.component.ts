import { Component } from '@angular/core';

@Component({
    templateUrl: './app/sub02.component.html'
})
export class Sub02Component {
    todayUTC: number = Date.now();
    todayDateObject: Date = new Date();
    todayISO: string = (new Date()).toISOString();
    //////////////////////////////////////////////////
    today: number = Date.now();
    childrensDay: Date = new Date(2017, 4, 5, 12, 13, 14, 123);
    liberationDay: Date = new Date("2017-08-15 12:13:14");

    constructor(){

    }
}

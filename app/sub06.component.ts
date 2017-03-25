import { Component } from '@angular/core';

@Component({
    templateUrl: './app/sub06.component.html'
})
export class Sub06Component {
    apple:string = "APPLE";

    fruit: any = {
        '1': 'apple',
        'APPLE': '사과입니다.'
    }

    delete_alphabet=/[a-zA-Z]+/g;
    delete_number=/[0-9]+/g;
    delete_special_character=/[^\w\s]/g;

    replace_src='hate';
    replace_target='love';

////////////////////////////

    elements: Array<any> = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg'];
    numDisplay = 7;

////////////////////////////

    min: number = 10;
    max: number = 70;
    range: Array<any> = [10,20,30,40,50,60,70,80,90,100];
    members: Array<any> = [
        { name :'name1' , age : 45},
        { name :'name2' , age : 68},
        { name :'name3' , age : 48},
        { name :'name4' , age : 13},
        { name :'name5' , age : 18},
        { name :'name6' , age : 89},
        { name :'name7' , age : 47},
        { name :'name8' , age : 78},
        { name :'name9' , age : 92},
        { name :'name10' , age : 17},
        { name :'name11' , age : 8}
    ];
}

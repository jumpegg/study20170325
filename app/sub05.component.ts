import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    templateUrl: './app/sub05.component.html'
})
export class Sub05Component {
    second = Observable.interval(1000);
    second_map_take = Observable.interval(1000).map(i => i).take(51);
    greetings$: Observable<string>;
    takeLnumber = 1;
    msg: string = '123456789-abcdefg';

    apple: string = 'apple';
    
    fruit: any = {
        'apple' : '사과',
        'banana' : '바나나',
        'grape' : '포도',
        'orange' : '오렌지',
        'mango' : '망고',
        'watermelon' : '수박'
    }

    private greetings = [
        'good morning',
        'good afternoon',
        'good evening'
    ];
    constructor(){
        this.asyncCall(1);
    }

    asyncCall(num: number){
        this.greetings$ = Observable.interval(100)
            .map(i => this.greetings[i])
            .take(num);
    }
}

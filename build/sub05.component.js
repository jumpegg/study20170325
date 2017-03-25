"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var Sub05Component = (function () {
    function Sub05Component() {
        this.second = Rx_1.Observable.interval(1000);
        this.second_map_take = Rx_1.Observable.interval(1000).map(function (i) { return i; }).take(51);
        this.takeLnumber = 1;
        this.msg = '123456789-abcdefg';
        this.apple = 'apple';
        this.fruit = {
            'apple': '사과',
            'banana': '바나나',
            'grape': '포도',
            'orange': '오렌지',
            'mango': '망고',
            'watermelon': '수박'
        };
        this.greetings = [
            'good morning',
            'good afternoon',
            'good evening'
        ];
        this.asyncCall(1);
    }
    Sub05Component.prototype.asyncCall = function (num) {
        var _this = this;
        this.greetings$ = Rx_1.Observable.interval(100)
            .map(function (i) { return _this.greetings[i]; })
            .take(num);
    };
    return Sub05Component;
}());
Sub05Component = __decorate([
    core_1.Component({
        templateUrl: './app/sub05.component.html'
    }),
    __metadata("design:paramtypes", [])
], Sub05Component);
exports.Sub05Component = Sub05Component;
//# sourceMappingURL=sub05.component.js.map
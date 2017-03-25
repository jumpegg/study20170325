"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Sub06Component = (function () {
    function Sub06Component() {
        this.apple = "APPLE";
        this.fruit = {
            '1': 'apple',
            'APPLE': '사과입니다.'
        };
        this.delete_alphabet = /[a-zA-Z]+/g;
        this.delete_number = /[0-9]+/g;
        this.delete_special_character = /[^\w\s]/g;
        this.replace_src = 'hate';
        this.replace_target = 'love';
        ////////////////////////////
        this.elements = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg'];
        this.numDisplay = 7;
        ////////////////////////////
        this.min = 10;
        this.max = 70;
        this.range = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        this.members = [
            { name: 'name1', age: 45 },
            { name: 'name2', age: 68 },
            { name: 'name3', age: 48 },
            { name: 'name4', age: 13 },
            { name: 'name5', age: 18 },
            { name: 'name6', age: 89 },
            { name: 'name7', age: 47 },
            { name: 'name8', age: 78 },
            { name: 'name9', age: 92 },
            { name: 'name10', age: 17 },
            { name: 'name11', age: 8 }
        ];
    }
    return Sub06Component;
}());
Sub06Component = __decorate([
    core_1.Component({
        templateUrl: './app/sub06.component.html'
    })
], Sub06Component);
exports.Sub06Component = Sub06Component;
//# sourceMappingURL=sub06.component.js.map
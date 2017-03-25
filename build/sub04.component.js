"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Sub04Component = (function () {
    function Sub04Component() {
        this.object = { name: 'Angular', version: 2, currentPipe: { name: 'json 파이프', test: ['a', 1] } };
        this.jsonString = JSON.stringify(this.object);
        this.e = 2.7182;
        this.pi = 3.141;
    }
    return Sub04Component;
}());
Sub04Component = __decorate([
    core_1.Component({
        templateUrl: './app/sub04.component.html'
    })
], Sub04Component);
exports.Sub04Component = Sub04Component;
//# sourceMappingURL=sub04.component.js.map
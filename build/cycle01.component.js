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
var Cycle01Component = (function () {
    function Cycle01Component() {
        this.isShow = false;
        this.test = "test";
        this.shouldShow = true;
        console.log("1 - constructor()");
    }
    Cycle01Component.prototype.toggle = function () { this.shouldShow = !this.shouldShow; };
    Cycle01Component.prototype.ngOnChanges = function () {
        console.log("2 - ngOnChanges()");
    };
    Cycle01Component.prototype.ngOnInit = function () {
        console.log("3 - ngOnInit()");
    };
    Cycle01Component.prototype.ngDoCheck = function () {
        console.log("4 - ngDoCheck()");
    };
    Cycle01Component.prototype.ngAfterContentInit = function () {
        console.log("5 - ngAfterContentInit()");
    };
    Cycle01Component.prototype.ngAfterContentChecked = function () {
        console.log("6 - ngAfterContentChecked()");
    };
    Cycle01Component.prototype.ngAfterViewInit = function () {
        console.log("7 - ngAfterViewInit()");
    };
    Cycle01Component.prototype.ngAfterViewChecked = function () {
        console.log("8 - ngAfterViewChecked()");
        console.log("#########################");
    };
    Cycle01Component.prototype.ngOnDestroy = function () {
        console.log("9 - ngOnDestroy()");
    };
    return Cycle01Component;
}());
Cycle01Component = __decorate([
    core_1.Component({
        templateUrl: './app/cycle01.component.html',
        styleUrls: ["./assets/stylesheets/book.css"]
    }),
    __metadata("design:paramtypes", [])
], Cycle01Component);
exports.Cycle01Component = Cycle01Component;
//# sourceMappingURL=cycle01.component.js.map
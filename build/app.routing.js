"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var sub02_component_1 = require("./sub02.component");
var sub03_component_1 = require("./sub03.component");
var sub04_component_1 = require("./sub04.component");
var sub05_component_1 = require("./sub05.component");
var sub06_component_1 = require("./sub06.component");
var cycle01_component_1 = require("./cycle01.component");
var routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: app_component_1.AppComponent },
    { path: 'sub02', component: sub02_component_1.Sub02Component },
    { path: 'sub03', component: sub03_component_1.Sub03Component },
    { path: 'sub04', component: sub04_component_1.Sub04Component },
    { path: 'sub05', component: sub05_component_1.Sub05Component },
    { path: 'sub06', component: sub06_component_1.Sub06Component },
    { path: 'cycle01', component: cycle01_component_1.Cycle01Component },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map
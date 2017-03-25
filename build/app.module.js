"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var sub02_component_1 = require("./sub02.component");
var sub03_component_1 = require("./sub03.component");
var sub04_component_1 = require("./sub04.component");
var sub05_component_1 = require("./sub05.component");
var sub06_component_1 = require("./sub06.component");
var cycle01_component_1 = require("./cycle01.component");
var custom01_component_1 = require("./custom01.component");
var custom02_component_1 = require("./custom02.component");
var custom03_component_1 = require("./custom03.component");
var custom04_component_1 = require("./custom04.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            custom01_component_1.ReplacePipe,
            custom02_component_1.LimitToPipe,
            custom03_component_1.FilterPipe,
            custom04_component_1.SearchPipe,
            app_component_1.AppComponent,
            sub02_component_1.Sub02Component,
            sub03_component_1.Sub03Component,
            sub04_component_1.Sub04Component,
            sub05_component_1.Sub05Component,
            sub06_component_1.Sub06Component,
            cycle01_component_1.Cycle01Component
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
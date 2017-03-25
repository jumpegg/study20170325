"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (input, keyword, field, ignoreCase) {
        if (ignoreCase === void 0) { ignoreCase = false; }
        if (field == null) {
            return input;
        }
        else {
            if (ignoreCase) {
                keyword = keyword.toLowerCase();
                return input.filter(function (item) {
                    if (item[field].toLowerCase().indexOf(keyword) != -1) {
                        return item;
                    }
                });
            }
            else {
                return input.filter(function (item) {
                    if (item[field].indexOf(keyword) != -1) {
                        return item;
                    }
                });
            }
        }
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    core_1.Pipe({
        name: 'search'
    })
], SearchPipe);
exports.SearchPipe = SearchPipe;
//# sourceMappingURL=custom04.component.js.map
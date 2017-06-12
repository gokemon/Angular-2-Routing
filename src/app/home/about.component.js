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
var core_1 = require('@angular/core');
/* imports Angular "core" library modules above and my stuff below */
/* TypeDecorator */
var AboutComponent = (function () {
    function AboutComponent() {
        this.pageTitle = 'About';
        this.developedBy = 'Created in Memory:';
        this.siteDeveloper = 'Adam West';
        this.siteDeveloperURL = 'http://portfolio.gokemon.xyz/';
        this.developedHandle = '@gokemon';
    }
    AboutComponent = __decorate([
        core_1.Component({
            /* Properties */
            templateUrl: './app/home/about.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent; // I set this up so I could swap out i18n bundles later
//# sourceMappingURL=about.component.js.map
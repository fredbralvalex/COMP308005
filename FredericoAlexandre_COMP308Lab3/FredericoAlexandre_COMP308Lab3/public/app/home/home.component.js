System.register(['@angular/core', '../authentication/authentication.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authentication_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_authenticationService) {
                    this._authenticationService = _authenticationService;
                    this.student = _authenticationService.student;
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: './app/home/home.template.html',
                        styles: ["\n    .menu-item {\n        text-decoration: none;\n        color: red;\n        font-weight: bold;\n        margin: 1%;\n        height: 20px;\n        margin-top:5%;                            \n    };\n    "]
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map
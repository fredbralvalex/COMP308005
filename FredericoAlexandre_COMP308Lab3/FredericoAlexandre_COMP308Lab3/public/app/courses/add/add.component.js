System.register(['@angular/core', '@angular/router', '../courses.service', '../../authentication/authentication.service'], function(exports_1, context_1) {
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
    var core_1, router_1, courses_service_1, authentication_service_1;
    var AddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            AddComponent = (function () {
                function AddComponent(_router, _authenticationService, _courseService) {
                    this._router = _router;
                    this._authenticationService = _authenticationService;
                    this._courseService = _courseService;
                    this.course = {};
                }
                AddComponent.prototype.add = function () {
                    var _this = this;
                    this._courseService
                        .create(this.course)
                        .subscribe(function (createdCourse) { return _this._router.navigate(['/courses',
                        createdCourse._id]); }, function (error) { return _this.errorMessage = error; });
                };
                AddComponent.prototype.cancel = function () {
                    this._router.navigate(['/courses']);
                };
                AddComponent.prototype.ngOnInit = function () {
                    this.student = this._authenticationService.student;
                };
                AddComponent = __decorate([
                    core_1.Component({
                        selector: 'add',
                        templateUrl: 'app/courses/add/add.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, courses_service_1.CoursesService])
                ], AddComponent);
                return AddComponent;
            }());
            exports_1("AddComponent", AddComponent);
        }
    }
});
//# sourceMappingURL=add.component.js.map
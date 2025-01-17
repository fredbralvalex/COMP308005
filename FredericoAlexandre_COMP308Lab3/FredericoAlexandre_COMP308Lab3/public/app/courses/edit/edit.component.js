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
    var EditComponent;
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
            EditComponent = (function () {
                function EditComponent(_router, _route, _authenticationService, _coursesService) {
                    this._router = _router;
                    this._route = _route;
                    this._authenticationService = _authenticationService;
                    this._coursesService = _coursesService;
                    this.course = {};
                }
                EditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.student = this._authenticationService.student;
                    this.paramsObserver = this._route.params.subscribe(function (params) {
                        var courseId = params['courseId'];
                        _this._coursesService.read(courseId).subscribe(function (course) {
                            _this.course = course;
                        }, function (error) { return _this._router.navigate(['/courses']); });
                    });
                };
                EditComponent.prototype.ngOnDestroy = function () {
                    this.paramsObserver.unsubscribe();
                };
                EditComponent.prototype.update = function () {
                    var _this = this;
                    this._coursesService.update(this.course).subscribe(function (savedCourse) { return _this._router.navigate(['/courses', savedCourse._id]); }, function (error) { return _this.errorMessage =
                        error; });
                };
                EditComponent.prototype.cancel = function () {
                    this._router.navigate(['/courses']);
                };
                EditComponent = __decorate([
                    core_1.Component({
                        selector: 'edit',
                        templateUrl: 'app/courses/edit/edit.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, authentication_service_1.AuthenticationService, courses_service_1.CoursesService])
                ], EditComponent);
                return EditComponent;
            }());
            exports_1("EditComponent", EditComponent);
        }
    }
});
//# sourceMappingURL=edit.component.js.map
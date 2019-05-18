import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses.service';
import { AuthenticationService } from '../../authentication/authentication.service';
@Component({
    selector: 'edit',
    templateUrl: 'app/courses/edit/edit.template.html'
})
export class EditComponent {
    course: any = {};
    errorMessage: string;
    paramsObserver: any;
    student:any;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _coursesService: CoursesService) { }
    ngOnInit() {
        this.student = this._authenticationService.student;
        this.paramsObserver = this._route.params.subscribe(params => {
            let courseId = params['courseId'];
            this._coursesService.read(courseId).subscribe(course => {
                this.course = course;
            },
                error => this._router.navigate(['/courses']));
});
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._coursesService.update(this.course).subscribe(savedCourse => this._router.navigate(['/courses', savedCourse._id]),
            error => this.errorMessage =
                error);
    }
    cancel () {
        this._router.navigate(['/courses']);
    }
}
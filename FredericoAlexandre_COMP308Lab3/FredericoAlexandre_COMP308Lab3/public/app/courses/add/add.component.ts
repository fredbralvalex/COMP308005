import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { AuthenticationService } from '../../authentication/authentication.service';
@Component({
    selector: 'add',
    templateUrl: 'app/courses/add/add.template.html'
})
export class AddComponent {
    course: any = {};
    student:any;
    errorMessage: string;
    constructor(private _router: Router,
        private _authenticationService: AuthenticationService,
        private _courseService: CoursesService) { }
    add() {
        this._courseService
            .create(this.course)
            .subscribe(createdCourse => this._router.navigate(['/courses',
                createdCourse._id]),
            error => this.errorMessage = error);
    }
    cancel () {
        this._router.navigate(['/courses']);
    }
    ngOnInit() {
        this.student = this._authenticationService.student;
    }
}

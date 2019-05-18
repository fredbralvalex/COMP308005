import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AuthenticationService } from '../../authentication/authentication.service';
@Component({
    selector: 'list',
    templateUrl: 'app/courses/list/list.template.html'
})
export class ListComponent {
    courses: any;
    errorMessage: string;
    student:any;
    constructor(
        private _authenticationService: AuthenticationService,
        private _coursesService: CoursesService) {
        
     }
        
    ngOnInit() {
        this.student = this._authenticationService.student;
        this._coursesService.list().subscribe(courses => this.courses
            = courses);
    }
}


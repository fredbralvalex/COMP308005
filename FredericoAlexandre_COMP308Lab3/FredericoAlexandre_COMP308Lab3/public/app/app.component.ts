import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'mean-app',
    template: `<router-outlet></router-outlet>`,
    styles: [`
    .menu-item {
        text-decoration: none;
        color: red;
        font-weight: bold;
        margin: 1%;
        height: 20px;
        margin-top:5%;                            
    };
    `]
})
export class AppComponent {
    student: any;
    constructor(private _authenticationService: AuthenticationService, private router: Router) {
        this.student = _authenticationService.student;
    }
}

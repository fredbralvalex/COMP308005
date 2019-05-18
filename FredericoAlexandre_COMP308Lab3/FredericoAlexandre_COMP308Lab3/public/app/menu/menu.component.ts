import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
@Component({
    selector: 'app-menu',
    templateUrl: './app/menu/menu.template.html',
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
export class MenuComponent {
    student: any;
    constructor(private _authenticationService:
        AuthenticationService) {
        this.student = _authenticationService.student;
    }
}
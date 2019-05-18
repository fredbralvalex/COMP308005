import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { SessionService } from './authentication/auth/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'COMP308 - Project 2019';
  today:number;

  constructor (
    private authService: AuthenticationService,
    private session: SessionService
  ) {this.today = Date.now()}

  ngOnInit() {
      this.authService.populate();
  }
}

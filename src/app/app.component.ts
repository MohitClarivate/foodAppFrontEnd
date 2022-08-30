import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router, private user: UserService) {}
  title = 'foodApp';

  logOut() {
    localStorage.removeItem('role');
    localStorage.removeItem('branch');
    window.alert('logged out succesfully');
    this.router.navigate(['loginuser']);
  }
}

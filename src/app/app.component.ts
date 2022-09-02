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

  isstaff() {
    if (this.user.getRole() == 'staff') {
      return true;
    } else {
      return false;
    }
  }

  isBM() {
    if (this.user.getRole() == 'bm') {
      return true;
    } else {
      return false;
    }
  }

  isLoggedin() {
    return this.user.isLoggedIn();
  }
  isLoggedout() {
    return !this.user.isLoggedIn();
  }

  logOut() {
    localStorage.removeItem('role');
    localStorage.removeItem('branch');
    localStorage.removeItem('name');
    window.alert('logged out succesfully');
    this.router.navigate(['loginuser']);
  }
}

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

  name: any;
  role: any;

  currentuser() {
    if (this.user.getRole() != undefined) {
      this.name = localStorage.getItem('name');
      this.role = localStorage.getItem('role');
      return true;
    } else {
      return false;
    }
  }

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
    localStorage.clear();
    // localStorage.removeItem('role');
    // localStorage.removeItem('branch');
    // localStorage.removeItem('name');
    window.alert('logged out succesfully');
    this.router.navigate(['loginuser']);
  }
}

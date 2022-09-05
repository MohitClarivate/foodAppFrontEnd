import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent implements OnInit {
  constructor(private user: UserService, private router: Router) {}
  role: any;
  name: any;
  branch: any;
  data: any;

  ngOnInit(): void {
    if (localStorage.getItem('role') != undefined) {
      window.alert('you are already logged in');
      this.router.navigate(['orders']);
    }
  }

  loginUser(form: NgForm) {
    this.user.loginUser(form.value.email, form.value.password).subscribe(
      (res) => {
        this.data = res;
        if (this.data.status == 200) {
          this.role = this.data.t.role;
          this.name = this.data.t.name;
          localStorage.setItem('role', this.role);
          localStorage.setItem('name', this.name);
          if (this.role != 'admin') {
            this.branch = this.data.t.branch.id;
            localStorage.setItem('branch', this.branch);
          }
        }
        console.log(res);
        if (this.user.getRole() == 'admin') {
          window.alert('Welcome ' + this.name + ' you are logged in!');
          return this.router.navigate(['branchlist']);
        } else if (this.user.getRole() == 'bm') {
          window.alert('Welcome ' + this.name + ' you are logged in!');
          return this.router.navigate(['menu']);
        } else if (this.user.getRole() == 'staff') {
          window.alert('Welcome ' + this.name + ' you are logged in!');
          return this.router.navigate(['orders']);
        } else {
          return this.router.navigate(['']);
        }
      },
      (err) => {
        console.log(err);
        window.alert(err.error.message);
      }
    );
  }
}

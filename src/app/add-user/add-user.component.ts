import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { BranchService } from '../Services/branch.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  result: any;
  errorMsg: any;
  constructor(
    private user: UserService,
    private branchlist: BranchService,
    private router: Router
  ) {}

  branch = {
    id: '',
  };

  checkadmin = this.user.isAdmin();

  isLoggedIn = this.user.isLoggedIn();

  ngOnInit(): void {
    if (this.user.getRole() == 'staff') {
      window.alert('Only for Admin and Branch Managers');
      this.router.navigate(['orders']);
    }
    this.branchlist.getBranchList().subscribe((data) => {
      this.result = data;
    });
  }

  addUser(form: NgForm) {
    if (this.user.getRole() == 'bm') {
      form.value.role = 'staff';
      this.branch.id = this.user.getBranch();
      form.value.branch = this.branch;
    } else {
      this.branch.id = form.value.branch;
      form.value.branch = this.branch;
    }
    //console.log(form.value);
    this.user.addUser(form.value).subscribe(
      (res) => {
        //console.log(res);
        window.alert('User added Succesfully');
        this.router.navigate(['stafflist']);
      },
      (err) => {
        //console.log(err);
        window.alert(err.error.message);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchService } from '../Services/branch.service';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css'],
})
export class AddBranchComponent implements OnInit {
  constructor(
    private branch: BranchService,
    private user: UserService,
    private router: Router
  ) {}

  isLoggedIn = this.user.isLoggedIn();

  ngOnInit(): void {
    if ((this.isLoggedIn = true)) {
      if (this.user.getRole() == 'admin') {
      } else if (this.user.getRole() == 'bm') {
        window.alert('not authorized');
        this.router.navigate(['menu']);
      } else if (this.user.getRole() == 'staff') {
        window.alert('not authorized');
        this.router.navigate(['orders']);
      }
    }
  }

  addBranch(form: NgForm) {
    if (this.user.getRole() == 'admin') {
      console.log(form.value);
      this.branch.addBranch(form.value).subscribe(
        (res) => {
          console.log(res);
          window.alert('Branch added Succesfully');
          this.router.navigate(['branchmanagerlist']);
        },
        (err) => {
          console.log(err);
          window.alert(err.error.message);
        }
      );
    }
  }
}

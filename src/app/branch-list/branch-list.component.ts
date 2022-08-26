import { Component, OnInit } from '@angular/core';
import { LoginUserComponent } from '../login-user/login-user.component';
import { BranchService } from '../Services/branch.service';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css'],
})
export class BranchListComponent implements OnInit {
  allbM: any;
  value: any;
  errorMsg: any;

  constructor(
    private branchlist: BranchService,
    private router: Router,
    private user: UserService
  ) {}

  isLoggedIn = this.user.isLoggedIn();

  ngOnInit(): void {
    if (this.user.getRole() == 'admin') {
      this.branchlist.getAllBM().subscribe((data) => {
        this.allbM = data;
        console.log(data);
      });
    } else if (this.user.getRole() == 'bm') {
      window.alert('not authorized');
      this.router.navigate(['menu']);
    } else if (this.user.getRole() == 'staff') {
      window.alert('not authorized');
      this.router.navigate(['orders']);
    }
  }

  managerlist(form: NgForm) {
    this.value = form.value.id;
    //console.log(this.value);
  }
}

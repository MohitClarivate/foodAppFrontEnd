import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BranchService } from '../Services/branch.service';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css'],
})
export class BranchListComponent implements OnInit {
  allbranch: any;
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
      this.branchlist.getBranchList().subscribe((data) => {
        this.allbranch = data;
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

  //add branch button
  addBranch() {
    this.router.navigate(['addbranch']);
  }

  branchList(form: NgForm) {
    this.value = form.value.id;
  }

  //delete branch by id
  deleteBranch(id: any) {
    this.branchlist.deleteBranch(id).subscribe((res) => {
      console.log(res);
      window.alert('Branch deleted sucessfully');
      //
    });
  }
}

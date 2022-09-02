import { Component, OnInit } from '@angular/core';
import { LoginUserComponent } from '../login-user/login-user.component';
import { BranchService } from '../Services/branch.service';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css'],
})
export class StaffListComponent implements OnInit {
  allstaff: any;
  value: any;
  errorMsg: any;

  constructor(
    private branchlist: BranchService,
    private router: Router,
    private user: UserService
  ) {}

  ngOnInit(): void {
    if (this.user.getRole() == 'admin' || this.user.getRole() == 'bm') {
      this.user.getAllStaff().subscribe((data) => {
        this.allstaff = data;
        console.log(data);
      });
    } else if (this.user.getRole() == 'staff') {
      window.alert('Only for Admin and Branch Managers');
      this.router.navigate(['orders']);
    }
  }

  //delete staff by id
  deleteStaff(id: any) {
    this.user.deleteUser(id).subscribe((res) => {
      console.log(res);
      window.alert('Staff Member deleted sucessfully');
      //
    });
  }
}

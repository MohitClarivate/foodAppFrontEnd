import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchService } from '../Services/branch.service';
import { FoodService } from '../Services/food.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent implements OnInit {
  result: any;
  errorMsg: any;

  constructor(
    private user: UserService,
    private branchlist: BranchService,
    private router: Router,
    private food: FoodService
  ) {}

  branch = {
    id: '',
  };

  checkadmin = this.user.isAdmin();

  isLoggedIn = this.user.isLoggedIn();

  ngOnInit(): void {
    if (this.isLoggedIn == true) {
      if (this.user.getRole() == 'staff') {
        window.alert('you are not authorized');
        this.router.navigate(['orders']);
      }
      this.branchlist.getBranchList().subscribe((data) => {
        this.result = data;
      });
    }
  }

  addFood(form: NgForm) {
    if (this.user.getRole() == 'bm') {
      form.value.role = 'staff';
      this.branch.id = this.user.getBranch();
      form.value.branch = this.branch;
    } else {
      this.branch.id = form.value.branch;
      form.value.branch = this.branch;
    }
    console.log(form.value);
    this.food.addFood(form.value).subscribe(
      (res) => {
        console.log(res);
        window.alert('Food added Succesfully');
        this.router.navigate(['menu']);
      },
      (err) => {
        console.log(err);
        window.alert(err.error.message);
      }
    );
  }
}

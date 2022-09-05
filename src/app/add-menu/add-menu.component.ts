import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchService } from '../Services/branch.service';
import { MenuService } from '../Services/menu.service';
import { FoodService } from '../Services/food.service';
import { UserService } from '../Services/user.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
})
export class AddMenuComponent implements OnInit {
  constructor(
    private user: UserService,
    private router: Router,
    private menu: MenuService,
    private food: FoodService,
    private branchlist: BranchService
  ) {}

  allfood: any = [];
  result: any;
  templist: any = [];

  isLoggedIn = this.user.isLoggedIn();

  dropdownList: any = [];
  dropdownSettings = {};

  ngOnInit(): void {
    if (this.user.getRole() == 'staff') {
      window.alert('Only for Admin and Branch Managers');
      this.router.navigate(['orders']);
    } else {
      this.branchlist.getBranchList().subscribe((data) => {
        this.result = data;
      });
      this.food.getAllFood().subscribe((data) => {
        this.allfood = data;
        if (localStorage.getItem('role') == 'admin') {
          this.dropdownList = this.allfood.t;
        } else {
          for (let f of this.allfood.t) {
            if (f.branch.id == localStorage.getItem('branch')) {
              this.templist.push(f);
            }
          }
          this.dropdownList = this.templist;
          console.log(this.dropdownList);
        }
      });
      this.dropdownSettings = {
        idField: 'id',
        textField: 'name',
      };
    }
  }

  branch = {
    id: '',
  };

  checkadmin = this.user.isAdmin();

  addMenu(form: NgForm) {
    if (this.user.getRole() == 'admin') {
      this.branch.id = form.value.branch;
      form.value.branch = this.branch;
    } else if (this.user.getRole() == 'bm') {
      this.branch.id = this.user.getBranch();
      form.value.branch = this.branch;
    } else {
      this.branch.id = this.user.getBranch();
      form.value.branch = this.branch;
    }
    this.menu.addMenu(form.value).subscribe(
      (res) => {
        //console.log(res);
        window.alert('Menu added Succesfully');
        this.router.navigate(['menu']);
      },
      (err) => {
        //console.log(err);
        window.alert(err.error.message);
      }
    );
  }
}

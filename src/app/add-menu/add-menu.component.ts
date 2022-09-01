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
    private food: FoodService
  ) {}

  allfood: any = [];

  isLoggedIn = this.user.isLoggedIn();

  dropdownList: any = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit(): void {
    this.food.getAllFood().subscribe((data) => {
      this.allfood = data;
      this.dropdownList = this.allfood.t;
    });
    this.dropdownSettings = {
      idField: 'id',
      textField: 'name',
    };

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

  branch = {
    id: '',
  };

  addMenu(form: NgForm) {
    if (this.user.getRole() == 'admin') {
      this.branch.id = form.value.branch;
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

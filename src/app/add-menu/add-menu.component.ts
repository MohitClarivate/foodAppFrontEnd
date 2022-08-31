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
  index: any;

  isLoggedIn = this.user.isLoggedIn();

  dropdownList: any = [];
  selectedItems = [];
  dropdownSettings = {};
  temp: any = [];

  ngOnInit(): void {
    this.food.getAllFood().subscribe((data) => {
      this.allfood = data;
      //console.log(data);
      //console.log(this.allfood.t);
      this.dropdownList = this.allfood.t;
      //console.log(this.dropdownList);
    });
    this.dropdownSettings = {
      idField: 'id',
      textField: 'name',
    };
    this.selectedItems = [];
    //console.log(this.selectedItems);

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      unSelectAllText: 'UnSelect All',
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

  onItemDeSelect(item: any) {
    this.temp.pop(item);
    // for (let i of this.temp) {
    //   if (i.id == item.id) {
    //     this.temp.splice(i.id - 1, 1);
    //   }
    // }
    // const index = this.temp.indexOf(item);
    // console.log(index);
    // if (index !== -1) {
    //   this.temp.splice(index, 1);
    // }
    //this.temp.pop(item);
    // this.index = this.temp.indexOf(item);
    // this.temp.splice(this.index, 1);
    // console.log(this.index);
  }

  onItemSelect(item: any) {
    this.temp.push(item);
    console.log(item);
  }

  branch = {
    id: '',
  };

  addMenu(form: NgForm) {
    //console.log(this.selectedItems);
    console.log(this.temp);
    form.value.foods = this.temp;

    if (this.user.getRole() == 'admin') {
      this.branch.id = form.value.branch;
      form.value.branch = this.branch;
    } else {
      this.branch.id = this.user.getBranch();
      form.value.branch = this.branch;
    }
    //console.log(form.value);
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

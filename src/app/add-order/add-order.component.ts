import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchService } from '../Services/branch.service';
import { MenuService } from '../Services/menu.service';
import { FoodService } from '../Services/food.service';
import { UserService } from '../Services/user.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent implements OnInit {
  constructor(
    private user: UserService,
    private router: Router,
    private menu: MenuService,
    private food: FoodService,
    private order: OrderService,
    private branchlist: BranchService
  ) {}

  allfood: any = [];
  index: any;
  result: any;

  checkadmin = this.user.isAdmin();

  isLoggedIn = this.user.isLoggedIn();

  dropdownList: any = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit(): void {
    this.branchlist.getBranchList().subscribe((data) => {
      this.result = data;
    });
    this.food.getAllFood().subscribe((data) => {
      this.allfood = data;
      this.dropdownList = this.allfood.t;
    });
    this.dropdownSettings = {
      idField: 'id',
      textField: 'name',
    };
  }

  branch = {
    id: '',
  };

  addOrder(form: NgForm) {
    if (this.user.getRole() == 'admin') {
      this.branch.id = form.value.branch;
      form.value.branch = this.branch;
    } else {
      this.branch.id = this.user.getBranch();
      form.value.branch = this.branch;
    }
    //console.log(form.value);
    this.order.addOrder(form.value).subscribe(
      (res) => {
        //console.log(res);
        window.alert('Order Created Succesfully');
        this.router.navigate(['orders']);
      },
      (err) => {
        //console.log(err);
        window.alert(err.error.message);
      }
    );
  }
}

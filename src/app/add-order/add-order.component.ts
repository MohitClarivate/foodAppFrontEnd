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

  isLoggedIn = this.user.isLoggedIn();

  dropdownList: any = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit(): void {
    if ((this.isLoggedIn = true)) {
      this.branchlist.getBranchList().subscribe((data) => {
        this.result = data;
      });
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
      //this.selectedItems = [];
      //console.log(this.selectedItems);
    }
  }

  // onItemDeSelect(item: any) {
  //   var index = this.temp.findIndex((obj: { id: any }) => obj.id == item.id);
  //   this.temp.splice(index, 1);
  //   console.log(this.temp);
  // }

  // onItemSelect(item: any) {
  //   this.temp.push(item);
  //   //console.log(item);
  // }

  branch = {
    id: '',
  };

  addOrder(form: NgForm) {
    //console.log(this.selectedItems);
    // console.log(this.temp);
    // form.value.foods = this.temp;

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

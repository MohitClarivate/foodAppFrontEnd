import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../Services/food.service';
import { MenuService } from '../Services/menu.service';
import { OrderService } from '../Services/order.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css'],
})
export class EditOrderComponent implements OnInit {
  result: any;
  selectedOrder: any;

  constructor(
    private user: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private menu: MenuService,
    private food: FoodService,
    private order: OrderService
  ) {}

  checkadmin = this.user.isAdmin();
  isLoggedIn = this.user.isLoggedIn();

  allfood: any = [];

  dropdownList: any = [];
  selectedItems = [];
  dropdownSettings = {};
  //temp: any = [];

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.order.getAllOrder().subscribe((data) => {
      this.result = data;
      for (let r of this.result) {
        if (r.id == id) {
          this.selectedOrder = r;
          this.selectedItems = r.foods;
          //this.temp = this.selectedItems;
          //console.log(this.dropdownList);
          console.log(this.selectedItems);
        }
      }
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

  editOrder(form: NgForm) {
    if (this.user.getRole() == 'bm') {
      form.value.role = 'staff';
      this.branch.id = this.user.getBranch();
      form.value.branch = this.branch;
    } else {
      this.branch.id = form.value.branch;
      form.value.branch = this.branch;
    }
    // form.value.foods = this.temp;
    // console.log(this.temp);
    console.log(this.selectedItems);

    console.log(form.value);
    this.order
      .updateOrder(this.selectedOrder.id, form.value)
      .subscribe((res) => {
        console.log(res);
      });
    window.alert('Menu Updated sucessfully');
    this.router.navigate(['orders']);
  }
}

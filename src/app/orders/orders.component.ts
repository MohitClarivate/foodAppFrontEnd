import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../Services/order.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  allorder: any;
  value: any;
  temp: any;
  constructor(
    private user: UserService,
    private router: Router,
    private order: OrderService
  ) {}

  isLoggedIn = this.user.isLoggedIn();

  ngOnInit(): void {
    this.value = localStorage.getItem('branch');
    //console.log(this.value);
    this.order.getAllOrder().subscribe((data) => {
      this.allorder = data;
      //console.log(data);
    });
  }

  //addmenu
  AddOrder() {
    this.router.navigate(['addorder']);
  }

  //display menu
  displayOrder(id: any) {
    this.temp = id;
  }

  //delete bm by id
  deleteOrder(id: any) {
    this.order.deleteOrder(id).subscribe((res) => {
      //console.log(res);
      window.alert('Order deleted sucessfully');
      //this.ngOnInit();
      this.order.getAllOrder().subscribe((data) => {
        this.allorder = data;
        //console.log(data);
      });
    });
  }
}

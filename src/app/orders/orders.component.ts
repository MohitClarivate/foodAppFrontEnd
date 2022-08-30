import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  constructor(private user: UserService) {}

  isLoggedIn = this.user.isLoggedIn();

  ngOnInit(): void {
    if ((this.isLoggedIn = true)) {
    }
  }
}

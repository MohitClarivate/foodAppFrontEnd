import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchService } from '../Services/branch.service';
import { FoodService } from '../Services/food.service';
import { MenuService } from '../Services/menu.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  allmenu: any;
  value: any;
  temp: any;
  constructor(
    private food: FoodService,
    private menu: MenuService,
    private branch: BranchService,
    private user: UserService,
    private router: Router
  ) {}

  foods = {
    id: '',
    name: '',
  };

  isLoggedIn = this.user.isLoggedIn();

  ngOnInit(): void {
    if (this.user.getRole() == 'admin' || this.user.getRole() == 'bm') {
      this.menu.getAllMenu().subscribe((data) => {
        this.allmenu = data;
        console.log(data);
      });
    } else if (this.user.getRole() == 'staff') {
      window.alert('Only for admin and Branch Managers!');
      this.router.navigate(['orders']);
    }
  }

  //addmenu
  AddMenu() {
    this.router.navigate(['addmenu']);
  }

  //display menu
  displayMenu(id: any) {
    this.temp = id;
  }

  //delete bm by id
  deleteMenu(id: any) {
    this.menu.deleteMenu(id).subscribe((res) => {
      console.log(res);
      window.alert('Menu deleted sucessfully');
      //this.ngOnInit();
      this.menu.getAllMenu().subscribe((data) => {
        this.allmenu = data;
        console.log(data);
      });
    });
  }

  //delete food
  deleteFood(id: any) {
    this.food.deleteFood(id).subscribe((res) => {
      console.log(res);
      window.alert('Food deleted sucessfully');
      //
    });
  }
}

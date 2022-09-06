import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchService } from '../Services/branch.service';
import { FoodService } from '../Services/food.service';
import { MenuService } from '../Services/menu.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent implements OnInit {
  allfood: any;
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
    this.value = localStorage.getItem('branch');
    //console.log(this.value);
    this.food.getAllFood().subscribe((data) => {
      this.allfood = data;
      //console.log(data);
    });
  }

  //addmenu
  AddFood() {
    this.router.navigate(['addfood']);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../Services/food.service';
import { MenuService } from '../Services/menu.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css'],
})
export class EditFoodComponent implements OnInit {
  result: any;
  selectedFood: any;

  constructor(
    private user: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private menu: MenuService,
    private food: FoodService
  ) {}
  branch = {
    id: '',
  };

  foods = {};

  checkadmin = this.user.isAdmin();

  isLoggedIn = this.user.isLoggedIn();

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.food.getAllFood().subscribe((data) => {
      this.result = data;

      for (let r of this.result.t) {
        if (r.id == id) {
          this.selectedFood = r;
          console.log(this.selectedFood);
        }
      }
    });
  }

  editFood(form: NgForm) {
    console.log(form.value);
    this.food.updateFood(this.selectedFood.id, form.value).subscribe((res) => {
      console.log(res);
    });
    window.alert('Food Updated sucessfully');
    this.router.navigate(['food']);
  }
}

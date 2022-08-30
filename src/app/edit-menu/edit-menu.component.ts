import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../Services/branch.service';
import { FoodService } from '../Services/food.service';
import { MenuService } from '../Services/menu.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css'],
})
export class EditMenuComponent implements OnInit {
  result: any;
  selectedMenu: any;

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
    this.menu.getAllMenu().subscribe((data) => {
      this.result = data;

      for (let r of this.result.t) {
        if (r.id == id) {
          this.selectedMenu = r;
          console.log(this.selectedMenu);
        }
      }
    });
  }

  editMenu(form: NgForm) {
    if (this.user.getRole() == 'bm') {
      form.value.role = 'staff';
      this.branch.id = this.user.getBranch();
      form.value.branch = this.branch;
    } else {
      this.branch.id = form.value.branch;
      form.value.branch = this.branch;
    }

    console.log(form.value);
    this.menu.updateMenu(this.selectedMenu.id, form.value).subscribe((res) => {
      console.log(res);
    });
    window.alert('Menu Updated sucessfully');
    this.router.navigate(['menu']);
  }
}

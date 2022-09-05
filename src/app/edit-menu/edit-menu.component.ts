import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
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
  list: any;
  selectedMenu: any;

  constructor(
    private user: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private menu: MenuService,
    private food: FoodService,
    private branchlist: BranchService
  ) {}

  checkadmin = this.user.isAdmin();
  isLoggedIn = this.user.isLoggedIn();

  allfood: any = [];
  templist: any = [];

  dropdownList: any = [];
  selectedItems = [];
  dropdownSettings = {};
  //temp: any = [];

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.menu.getAllMenu().subscribe((data) => {
      this.result = data;
      for (let r of this.result.t) {
        if (r.id == id) {
          this.selectedMenu = r;
          this.selectedItems = r.foods;
          //this.temp = this.selectedItems;
          //console.log(this.dropdownList);
          console.log(this.selectedItems);
        }
      }
    });
    this.branchlist.getBranchList().subscribe((data) => {
      this.list = data;
      console.log(this.list);
    });
    this.food.getAllFood().subscribe((data) => {
      this.allfood = data;
      if (localStorage.getItem('role') == 'admin') {
        this.dropdownList = this.allfood.t;
      } else {
        for (let f of this.allfood.t) {
          if (f.branch.id == localStorage.getItem('branch')) {
            this.templist.push(f);
          }
        }
        this.dropdownList = this.templist;
        console.log(this.dropdownList);
      }
    });
    this.dropdownSettings = {
      idField: 'id',
      textField: 'name',
    };
  }

  branch = {
    id: '',
  };

  editMenu(form: NgForm) {
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
    this.menu.updateMenu(this.selectedMenu.id, form.value).subscribe((res) => {
      console.log(res);
    });
    window.alert('Menu Updated sucessfully');
    this.router.navigate(['menu']);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchService } from '../Services/branch.service';
import { MenuService } from '../Services/menu.service';
import { UserService } from '../Services/user.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
})
export class AddMenuComponent implements OnInit {
  constructor(
    private branch: BranchService,
    private user: UserService,
    private router: Router,
    private menu: MenuService
  ) {}

  isLoggedIn = this.user.isLoggedIn();

  dropdownList: any = [];
  selectedItems: any = [];
  //dropdownSettings:any = {};

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' },
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
    ];
    // this.dropdownSettings:IDropdownSettings = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };
    if ((this.isLoggedIn = true)) {
      if (this.user.getRole() == 'admin') {
      } else if (this.user.getRole() == 'bm') {
        window.alert('not authorized');
        this.router.navigate(['menu']);
      } else if (this.user.getRole() == 'staff') {
        window.alert('not authorized');
        this.router.navigate(['orders']);
      }
    }
  }
  addMenu(form: NgForm) {
    if (this.user.getRole() == 'admin') {
      console.log(form.value);
      this.menu.addMenu(form.value).subscribe(
        (res) => {
          console.log(res);
          window.alert('Menu added Succesfully');
          this.router.navigate(['menu']);
        },
        (err) => {
          console.log(err);
          window.alert(err.error.message);
        }
      );
    }
  }

  //
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}

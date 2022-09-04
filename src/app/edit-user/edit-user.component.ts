import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  result: any;
  selectedUser: any;

  branch = {
    id: '',
  };

  constructor(
    private user: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.user.getAllUserById(id).subscribe((data) => {
      this.result = data;
      this.selectedUser = this.result.t;
      console.log(this.selectedUser);
    });
  }

  editUser(form: NgForm) {
    if (this.user.getRole() == 'bm') {
      form.value.role = 'staff';
      this.branch.id = this.user.getBranch();
      form.value.branch = this.branch;
    } else {
      this.branch.id = form.value.branch;
      form.value.branch = this.branch;
    }
    console.log(form.value);
    this.user.updateUser(this.selectedUser.id, form.value).subscribe((res) => {
      console.log(res);
    });
    window.alert('Updated sucessfully');
    this.router.navigate(['stafflist']);
  }
}

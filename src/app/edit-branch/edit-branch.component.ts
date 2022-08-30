import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from '../Services/branch.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css'],
})
export class EditBranchComponent implements OnInit {
  result: any;
  selectedBranch: any;

  constructor(
    private branch: BranchService,
    private user: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.branch.getBranchList().subscribe((data) => {
      this.result = data;

      for (let r of this.result.t) {
        if (r.id == id) {
          this.selectedBranch = r;
          //console.log(this.selectedUser);
        }
      }
    });
  }

  editBranch(form: NgForm) {
    // if (this.user.getRole() == 'bm') {
    //   form.value.role = 'staff';
    //   this.branch.id = this.user.getBranch();
    //   form.value.branch = this.branch;
    // } else {
    //   this.branch.id = form.value.branch;
    //   form.value.branch = this.branch;
    // }
    console.log(form.value);
    this.branch
      .updateBranch(this.selectedBranch.id, form.value)
      .subscribe((res) => {
        console.log(res);
      });
    window.alert('Updated sucessfully');
    this.router.navigate(['branchlist']);
  }
}

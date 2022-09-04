import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../Services/user.service';

@Pipe({
  name: 'staffList',
})
export class StaffListPipe implements PipeTransform {
  constructor(private user: UserService) {}

  result: any;

  transform(list: any, value: any): any {
    // console.log(value);
    console.log(list);
    const users = [];

    if (value == null) {
      return list;
    }

    for (let u of list) {
      if (u.branch != null) {
        if (u.branch.id == value) {
          users.push(u);
        }
      }
    }
    return users;

    // this.user.getAllUser().subscribe((data) => {
    //   this.result = data;
    //   const users = [];
    //   for (const user of this.result.t) {
    //     if (user.branch.id == value) {
    //       users.push(user);
    //     }
    //   }
    //   return users;
    // });
  }
}

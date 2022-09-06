import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'staffList',
})
export class StaffListPipe implements PipeTransform {
  transform(value: any, id: any): any {
    //console.log(value);
    //console.log(id);

    if (id == null || value.length == 0 || id == '') {
      return value;
    }
    const users = [];
    for (const user of value) {
      if (user.branch.id == id) {
        users.push(user);
      }
    }
    //console.log(users);

    return users;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'managerList',
})
export class ManagerListPipe implements PipeTransform {
  transform(value: any, id: any): any {
    console.log(value);
    console.log(id);

    if (id == undefined || value.length == 0) {
      return value;
    }
    const users = [];
    for (const user of value) {
      if (user.branch.id == id) {
        users.push(user);
      }
    }
    return users;
  }
}

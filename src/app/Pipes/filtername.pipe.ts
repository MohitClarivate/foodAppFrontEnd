import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtername',
  pure: false,
})
export class FilternamePipe implements PipeTransform {
  transform(value: any, searchString: string) {
    //console.log(value);
    //console.log(searchString);

    if (value.length == 0 || searchString == '') {
      return value;
    } else {
      const users = [];
      for (const user of value) {
        if (user.name == searchString) {
          users.push(user);
        }
      }
      return users;
    }
  }
}

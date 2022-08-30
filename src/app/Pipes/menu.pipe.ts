import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menu',
})
export class MenuPipe implements PipeTransform {
  transform(value: any, temp: any): any {
    const list = [];
    for (const menu of value) {
      if (temp == menu.id) {
        list.push(menu);
      }
    }
    return list;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  //add food to the server using http POST method
  addMenu(menu: any) {
    return this.http.post('http://localhost:8080/savemenu', menu);
  }

  //get all Food from the server using http GET method
  getAllMenu() {
    return this.http.get('http://localhost:8080/findallmenu');
  }

  //Updating menu by using http method
  updateMenu(id: any, menu: any) {
    return this.http.put(`http://localhost:8080/updatemenu/${id}`, menu);
  }

  //Deleting menu using http delete method
  deleteMenu(id: any) {
    return this.http.delete(`http://localhost:8080/deletemenu/${id}`);
  }
}

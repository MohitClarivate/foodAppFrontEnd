import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  //add food order
  addOrder(order: any) {
    return this.http.post('http://localhost:8080/foodorder', order);
  }

  //get all order
  getAllOrder() {
    return this.http.get('http://localhost:8080/findallorder');
  }

  //Updating menu by using http method
  updateOrder(id: any, order: any) {
    return this.http.put(`http://localhost:8080/updateorder/${id}`, order);
  }

  //Deleting menu using http delete method
  deleteOrder(id: any) {
    return this.http.delete(`http://localhost:8080/deleteorder/${id}`);
  }
}

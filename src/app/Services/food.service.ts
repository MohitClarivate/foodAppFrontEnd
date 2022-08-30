import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  //get all Food from the server using http GET method
  getAllFood() {
    return this.http.get('http://localhost:8080/findallfood');
  }

  //get Food by id from the server using http GET method
  getFoodById() {
    return this.http.get('http://localhost:8080/getfoodbyid/{id}');
  }

  //Updating food by using http method
  updateFood(id: any, food: any) {
    return this.http.put(`http://localhost:8080/updatefood/${id}`, food);
  }

  //Deleting menu using http delete method
  deleteFood(id: any) {
    return this.http.delete(`http://localhost:8080/deletefood/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  constructor(private http: HttpClient) {}

  //get bill by id
  getBill(id: any) {
    return this.http.get(`http://localhost:8080/showbillbyid/${id}`);
  }
}

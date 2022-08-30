import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  //add the user to the server using http POST method
  addUser(user: any) {
    return this.http.post(
      'http://localhost:8080/saveuser',
      user
      // {
      //   headers: new HttpHeaders({
      //     Authorization: `Bearer ${this.token}`,
      //   }),
      // }
    );
  }

  //getting the all user data from the server using http GET method
  getAllUser() {
    return this.http.get('http://localhost:8080/findalluser');
  }

  //Updating user by using http method
  updateUser(id: any, user: any) {
    return this.http.put(`http://localhost:8080/updateuser/${id}`, user);
  }

  //check email and password
  loginUser(email: any, password: any) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('email', email);
    queryParams = queryParams.append('password', password);
    return this.http.get('http://localhost:8080/loginUser', {
      params: queryParams,
    });
  }

  //get role
  getRole() {
    return localStorage.getItem('role');
  }

  //get branch
  getBranch(): any {
    return localStorage.getItem('branch');
  }

  //check for admin
  isAdmin() {
    if (this.getRole() == 'admin') {
      return true;
    } else {
      return false;
    }
  }

  //check login
  isLoggedIn() {
    if (localStorage.getItem('role') != undefined) {
      return true;
    } else {
      window.alert('Login First');
      this.router.navigate(['loginuser']);
      return false;
    }
  }

  //Deleting a user using http delete method
  deleteUser(id: any) {
    return this.http.delete(`http://localhost:8080/deleteuser/${id}`);
  }
}

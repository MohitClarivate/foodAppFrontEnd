import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  constructor(private http: HttpClient, private user: UserService) {}

  //branch list
  getBranchList() {
    return this.http.get('http://localhost:8080/findallbranch');
  }

  //find all BM branch
  getAllBM() {
    return this.http.get('http://localhost:8080/findallBM');
  }

  //check for branch manager
  isBranchManager() {
    if (this.user.getRole() == 'bm') {
      return true;
    } else {
      return false;
    }
  }
}

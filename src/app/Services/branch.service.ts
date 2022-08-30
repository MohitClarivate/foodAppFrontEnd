import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  constructor(private http: HttpClient, private user: UserService) {}

  //add branch to the server using http POST method
  addBranch(branch: any) {
    return this.http.post('http://localhost:8080/savebranch', branch);
  }

  //Update branch by using http method
  updateBranch(id: any, branch: any) {
    return this.http.put(`http://localhost:8080/updatebranch/${id}`, branch);
  }

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

  //Deleting a branch using http delete method
  deleteBranch(id: any) {
    return this.http.delete(`http://localhost:8080/deletebranch/${id}`);
  }
}

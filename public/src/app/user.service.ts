import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';
import { HttpHeaders } from '@angular/common/http';
import { switchMap,map } from 'rxjs/operators';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // register user services
  getRegisteruser(user){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
      })
    };
      return this.http.post("http://localhost:3000/user/register",user,httpOptions);
  }

  //get the role id by name of role service
  getRoleId(usertype){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get("http://localhost:3000/user/usertype/"+usertype,httpOptions);
  }
// login service
  getLogin(user){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.post("http://localhost:3000/user/login",user,httpOptions);
  }
  //get all users service
  getallusers(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get("http://localhost:3000/user/getallusers",httpOptions);
  }
  //update user service
  updateuserbyid(user){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.put("http://localhost:3000/user/editrole/"+user._id,user,httpOptions);
  }
  //delete user by id service
  deletebyid(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.put("http://localhost:3000/user/delete/"+id,httpOptions);
  }
}





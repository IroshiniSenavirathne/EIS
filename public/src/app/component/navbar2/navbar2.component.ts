import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  constructor(private router: Router) { }

  public IsAdmin= false;
  public Username:string;
  ngOnInit() {
    if(localStorage.getItem('userrole')=="true"){
      this.IsAdmin=true;
    }
    this.Username=localStorage.getItem('username');
  }
  onClick(){
    localStorage.setItem('status',"false");
    this.router.navigate(['/home']);
  }

}

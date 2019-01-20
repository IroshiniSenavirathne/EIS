import { Component, OnInit,OnDestroy } from '@angular/core';
import {User} from '../../user';
import {NgForm} from '@angular/forms';
import {UserService} from '../../user.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit ,OnDestroy {
returnUrl: string;

  constructor(private userservice: UserService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    
       
  }

  onSubmit(f: NgForm) {
    if(f.status!="INVALID"){
    var user= new User(
      "",
      f.value.fname,
      f.value.uname,
      f.value.email,
      f.value.pswd,
      "user"
    );
    if (f.value.fname!=""&& f.value.uname!=""&& f.value.email!=""&& f.value.pswd!="") {
      
    
    this.userservice.getRegisteruser(user).subscribe(res=>{
      if(res!=null && res != undefined && res['response']!={}){
       localStorage.setItem('status',"true");

       if(res['response'].roleid=="5bf38b67fb6fc0561ffc9e26"){
        localStorage.setItem('userrole',"true");
      }
      else{
        localStorage.setItem('userrole',"false");
      }
      
      localStorage.setItem('username',res['response'].username);
       this.router.navigate(['/alldetails']);

       history.pushState(null, null, '/register');
       window.addEventListener('popstate', function(event) {
       history.pushState(null, null, '/register');
       });
      }
       else
       localStorage.setItem('status',"false");;});
      }
    }
  }
  onCancel(){
    this.router.navigate(['/home']);
  }
  ngOnDestroy(){
    //localStorage.setItem('status',"false");
  }
}

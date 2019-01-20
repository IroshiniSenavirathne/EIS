import { Component, OnInit,OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../user.service';
import {User} from '../../user';
import {Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  constructor(private userservice: UserService,private router: Router,private route: ActivatedRoute) { }
  Loginform: FormGroup;
  public Notvalid=false;
  ngOnInit() {
  }
 //username and pasword check
  onSubmit(f: NgForm) {
    this.Notvalid=false;
   if(f.status!="INVALID"){
 var usr=new User(
  "",
  "",
  "",
  f.value.email,
  f.value.pswd,
  ""
 );
    this.userservice.getLogin(usr).subscribe(data=>{
      
      if(data['result']==null || data['result'].length==0){
        this.Notvalid=true;
      }
      if(data!=null && data != undefined && data['result'].length!=0){
        localStorage.setItem('status',"true");
        if(data['result'][0].roleid=="5bf38b67fb6fc0561ffc9e26"){
          localStorage.setItem('userrole',"true");
        }
        else{
          localStorage.setItem('userrole',"false");
        }
        
        localStorage.setItem('username',data['result'][0].username);
        this.router.navigate(['/alldetails']);
        
        history.pushState(null, null, '/login');
        window.addEventListener('popstate', function(event) {
        history.pushState(null, null, '/login');
        });
       }
        else
        localStorage.setItem('status',"false");});
      }
   }
   onCancel(){
     this.router.navigate(['/home']);
   }
   ngOnDestroy(){
     //localStorage.setItem('status',"false");
   }

}

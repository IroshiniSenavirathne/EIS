import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private userservice: UserService,private router: Router,private route: ActivatedRoute) { }
  users=[];
  ngOnInit() {
    this.getallusers();
  }
  //get all users
  getallusers(){
    this.userservice.getallusers().subscribe(res=>{
      for (let index = 0; index < res['result'].length; index++) {
        this.users[index]=res['result'][index];
        if (this.users[index].roleid=="5bf38b67fb6fc0561ffc9e26") {
            var userrole={"userrole":"Admin User"};
            this.users[index]= Object.assign(this.users[index],userrole);
        }
        else{
          var userrole={"userrole":"Normal User"};
          this.users[index]= Object.assign(this.users[index],userrole);
        }
        
      }
    });
  }
  //edit user role
  edituserrole(user){
    if(user.roleid=="5bf38b43fb6fc0561ffc9e1c"){
      user.roleid="5bf38b67fb6fc0561ffc9e26";
    }
    else{
      user.roleid="5bf38b43fb6fc0561ffc9e1c";
    }
    this.userservice.updateuserbyid(user).subscribe(res=>{
      if(res['result']){
        this.users=[];
        this.getallusers();
      }
    });
  }
  //delete user
  deleteuser(user){
    this.userservice.deletebyid(user._id).subscribe(res=>{
      if(res['result']){
        this.users=[];
        this.getallusers();
      }
    });
  }
//redirect to main menu
  onGoBack(){
    this.router.navigate(['alldetails']);
  }
}

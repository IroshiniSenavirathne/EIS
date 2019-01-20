import { Component, OnInit } from '@angular/core';
import {Details} from '../../details';
import {EisdetailsService} from '../../eisdetails.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detailsearch',
  templateUrl: './detailsearch.component.html',
  styleUrls: ['./detailsearch.component.css']
})
export class DetailsearchComponent implements OnInit {
  private files = [];
  private files2= [];
  elephntname:string;
  characteristics:string;
  constructor(private eisdetailsService:EisdetailsService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }
  //search by name of elephant
  onSearch(){
    if(this.elephntname!=null){
      this.eisdetailsService.searchDetailsbyname(this.elephntname).subscribe(res=>{
        console.log(res);
        if(res['result']!=0){
          for (let i = 0; i < res['result'].length; i++) {

            this.files[i] = res['result'][i];
            console.log(this.files[i]);
            
          }
        }
        
      });
    }
  }
//search by details
  onSearchdetail(){
    if(this.characteristics!=null){
      this.eisdetailsService.searchDetailsbycharacteristic(this.characteristics).subscribe(res=>{
        console.log(res);
        if(res['result']!=0){
          for (let i = 0; i < res['result'].length; i++) {

            this.files2[i] = res['result'][i];
            console.log(this.files2[i]);
            
          }
        }
        
      });
    }
  }
  onGoBack(){
    this.router.navigate(['alldetails']);
  }

}

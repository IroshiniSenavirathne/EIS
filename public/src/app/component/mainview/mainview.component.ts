import { Component, OnInit } from '@angular/core';
import {ImageServiceService} from '../../image-service.service';
import {EisdetailsService} from '../../eisdetails.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {

  private files = [];
  constructor(private imageService: ImageServiceService,private eisdetailsService:EisdetailsService,) { }

  //get all images and 
  ngOnInit() {
    this.imageService.getallimages().subscribe(allfiles=>{
      if(allfiles['files']!=0){
      for (let i = 0; i < allfiles['files'].length; i++) {
        this.eisdetailsService.Getdetailsbyimageid(allfiles['files'][i]._id).subscribe(res=>{
         if(res['result']!=null){
          this.files[i] = allfiles['files'][i];
          delete this.files[i]._id;
          this.files[i] = Object.assign(this.files[i], res['result']);
         }
        });
      }
    }

    });

  }

}

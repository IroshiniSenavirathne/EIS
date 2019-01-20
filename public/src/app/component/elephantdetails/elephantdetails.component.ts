import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import {EisdetailsService} from '../../eisdetails.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Details} from '../../details';
import {ImageServiceService} from '../../image-service.service';
@Component({
  selector: 'app-elephantdetails',
  templateUrl: './elephantdetails.component.html',
  styleUrls: ['./elephantdetails.component.css']
})
export class ElephantdetailsComponent implements OnInit {
  details: Details;

  //Hidden field values
  @ViewChild('imageid') imageid:ElementRef;
  @ViewChild('detailid') imagename:ElementRef;

  public Isedit=false;
  public IsAdmin=false;
  public notupload=false;
  constructor(private eisdetailsService:EisdetailsService,private route: ActivatedRoute,private imageService: ImageServiceService,private router: Router) { }

//here details ara load when page is loading
  ngOnInit() {
    if(localStorage.getItem('userrole')=="true"){
      this.IsAdmin=true;
    }
    let param1 = this.route.snapshot.paramMap.get('id');
    this.eisdetailsService.Getdetailsbyid(param1).subscribe(res=>{
      this.details= new Details(
        res['result']._id,
        res['result'].elephntname,
        res['result'].age,
        res['result'].place,
        res['result'].gender,
        res['result'].type,
        res['result'].details,
        res['result'].imagename,
        res['result'].imageid,
        
      );


    })
  }
  //detlete detals
  deleteDetail(id){
    this.imageService.deleteImage(this.details.imageid).subscribe(res=>{
      if(res['delete']==true){
        this.eisdetailsService.deleteDetailsByid(id).subscribe(res=>{
          if(res['result']==true){
            this.router.navigate(['alldetails']);
          }
        });
      }

    });
   
  }
  //edit details button click
  EditDetails(){
    this.Isedit=true;
  }
  //update the data of elephant
  onUpdate(){
    if(this.details!=null){
    
    this.eisdetailsService.updateDetails(this.details).subscribe(res=>{
      var id=res['result']._id;
      this.router.navigate(['details',id]);
      this.Isedit=false;
    });
  }
  }
  
  //Cancel image of elephant
  onDelete(){
    this.notupload=true;
    this.imageService.deleteImage(this.details.imageid).subscribe(res=>{
      if(res['delete']==true){
        this.notupload = true;
      }

    });
  }

  //uploading the image to the mlab
  fileChange(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('File', file, file.name);
        this.imageService.uploadImage(formData).subscribe(res=>{
          if(res['file']!=null){
            this.details.imageid=res['file'].id;
            this.details.imagename=res['file'].filename;
          this.notupload=false;
          }
        });
      
    
      }
  }
  onCancel(id){
    this.Isedit=false;
    this.router.navigate(['details',id]);
  }
  onGoBack(){
    this.router.navigate(['alldetails']);
  }
}

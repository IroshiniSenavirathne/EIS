import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import {ImageServiceService} from '../../image-service.service';
import {NgForm} from '@angular/forms';
import {EisdetailsService} from '../../eisdetails.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Details} from '../../details'

@Component({
  selector: 'app-insertdetails',
  templateUrl: './insertdetails.component.html',
  styleUrls: ['./insertdetails.component.css']
})

export class InsertdetailsComponent implements OnInit {
  @ViewChild('imageid') imageid:ElementRef;
  @ViewChild('imagename') imagename:ElementRef;

  constructor(private imageService: ImageServiceService,private eisdetailsService:EisdetailsService,private router: Router) { }
 public image:any;
 public notupload = true;
 public candelete = false;

 //uploading the image to the mlab
  fileChange(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('File', file, file.name);
        this.imageService.uploadImage(formData).subscribe(res=>{
          if(res['file']!=null){
          this.image=res['file'];
          this.notupload=false;
          this.candelete=true;
          }
        });
      
    
      }
  }
  // save details of elephant
  onSubmit(f: NgForm) {
    if (f.value.fname!=""&& f.value.uname!=""&& f.value.email!=""&& f.value.pswd!=""&& this.imagename!= undefined && this.imagename!= undefined) {
      if(f.status!="INVALID"){
      var details= new Details(
        "",
        f.value.elname,
        f.value.age,
        f.value.place,
        f.value.gender,
        f.value.type,
        f.value.details,
        this.imagename.nativeElement.value,
        this.imageid.nativeElement.value
      );
      this.eisdetailsService.Saveelephantdetails(details).subscribe(res=>{
        if(res!=null && res != undefined && res['response']!={}){

          var Id= res['response']._id;
          this.router.navigate(['details',Id]);
        }
      });
    }
  } 
  }
  //change image by deleding from mlab
  onDelete(){
    console.log(this.imageid.nativeElement.value!);
    if(this.imageid.nativeElement.value!=null || this.imageid.nativeElement.value!=""){
    this.imageService.deleteImage(this.imageid.nativeElement.value).subscribe(res=>{
      if(res['delete']==true){
        this.notupload = true;
        this.candelete=false;
        this.image=null;
      }
  });
}
  }
  onCancel(){
    this.router.navigate(['alldetails']);
  }
  ngOnInit() {
  }

}


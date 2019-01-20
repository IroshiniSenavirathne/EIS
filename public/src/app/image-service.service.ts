import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private http: HttpClient) {}
//uplaod image service
  uploadImage(file:FormData ){
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept':'application/json'
      })
    };
      return this.http.post("http://localhost:3000/content/images",file,httpOptions);
  }
  //get details of images servise
  getallimages(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get("http://localhost:3000/content/allimg/",httpOptions);
  }

  //delete image service
  deleteImage(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.delete("http://localhost:3000/content/delete/"+id,httpOptions);
  }
  

}

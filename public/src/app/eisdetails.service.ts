import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EisdetailsService {

  constructor(private http: HttpClient) { }
// save elephant details service
  Saveelephantdetails(details){
    console.log(details);
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
      })
    };
      return this.http.post("http://localhost:3000/content/savedetails",details,httpOptions);
  }

  
  //get elephant details
  Getdetailsbyid(id){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
      })
    };
      return this.http.get("http://localhost:3000/content/getdetails/"+id,httpOptions);
  }
  
  //get elephant details by image id
  Getdetailsbyimageid(id){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
      })
    };
      return this.http.get("http://localhost:3000/content/getdetailsbyimg/"+id,httpOptions);
  }
  //get elephant details by image id
  deleteDetailsByid(id){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
      })
    };
      return this.http.delete("http://localhost:3000/content/deletedetails/"+id,httpOptions);
  }
//edit eliphan details
updateDetails(details){
  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
    })
  };
    return this.http.put("http://localhost:3000/content/updatedetails/"+details.id,details,httpOptions);
}

//search eliphant details
searchDetailsbyname(details){
  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
    })
  };
    return this.http.get("http://localhost:3000/content/searchdtailsbyname/"+details,httpOptions);
}

searchDetailsbycharacteristic(details){
  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
    })
  };
    return this.http.get("http://localhost:3000/content/searchcharactristic/"+details,httpOptions);
}
}
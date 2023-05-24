import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Citizen} from 'src/app/common/citizen';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from '../components/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  httpOptions = {
    headers : new HttpHeaders({'contectType' : 'application.json'})
  }
  

  constructor(private httpClient : HttpClient) {}

  registerCitizen(c1 : any){
    return this.httpClient.post(environment.baseUrl+'/registerCitizen',c1);
  }

  listAllCitizens() {          //return type is return type object written in <>
    
    return this.httpClient.get<Citizen [] >(environment.baseUrl + "/listCitizens", this.httpOptions);
      
  }

  getCitizenByID(id:Number){
      return this.httpClient.get<Citizen>(environment.baseUrl+'/singleCitizenDetail/'+id, this.httpOptions)
    }

    updatePost(id:Number, postData:any){
      return this.httpClient.put(`${environment.baseUrl}/editStatus`,postData, this.httpOptions)
    }

    deletePost(id:Number){
     
      return this.httpClient.delete<{message:string,post:any}>(environment.baseUrl +'/deleteCitizen/'+id)
    }
  // loginAuthor(loginInfo){
  //   return this.httpClient.post(environment.baseUrl+'/login',loginInfo);
  // }



//   private baseUrl = "http://localhost:8180/api/rest/listCitizen";


//   constructor(private httpClient : HttpClient) {}

//     getCitizenList() : Observable<Citizen []>{
   
//       return this.httpClient.get<Citizen []>(this.baseUrl,this.httpOptions);
//     }

   
}

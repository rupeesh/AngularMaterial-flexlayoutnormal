import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './dashboard/user.model';
import { Owl } from './owlslider/owl.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'https://jsonplaceholder.typicode.com/users';
  owlUrl = 'https://jsonplaceholder.typicode.com/photos';

// private headers = new HttpHeaders({
//   'Content-Type' : 'application/json',
//   'Accept' :  'application/json',
// "Access-Control-Allow-Origin": "*"
  
// });


  constructor(private http: HttpClient) { }

   fetchUser(): Observable<Users[]> {
   return this.http.get<Users[]>(this.url);
 }

 fetchImages(): Observable<Owl[]>{
 return this.http.get<Owl[]>(this.owlUrl);
 } 

}

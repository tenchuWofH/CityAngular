import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import City from "../data/cities.json";
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // getData() {
  //   // return this.http.get('/api/City');  //https://localhost:44352/ webapi host url
  //   return this.http.get('./data/cities.json');
  // }
  getData(): Observable<any>{
    // return this.http.get('/api/City');  //https://localhost:44352/ webapi host url
    return of(City).pipe(delay(1000));
  }

  postData(formData) {
    return this.http.post('/api/City', formData);
  }

  putData(id, formData) {
    return this.http.put('/api/City/' + id, formData);
  }
  deleteData(id) {
    return this.http.delete('/api/City/' + id);
  }
}

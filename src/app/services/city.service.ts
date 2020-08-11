import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  getData() {
    // return this.http.get('/api/City');  //https://localhost:44352/ webapi host url
    return this.http.get('../data/cities.json');
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

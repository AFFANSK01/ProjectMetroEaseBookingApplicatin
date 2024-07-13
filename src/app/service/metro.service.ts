import { HttpClient } from '@angular/common/http';
import id from '@angular/common/locales/id';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetroService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:8081"

  add(metro:Object):Observable<object>{
    return this.http.post(`${this.baseUrl}/metro1/addMetro`, metro);
  }
  
  getAllMetro(): any {
    return this.http.get(` ${this.baseUrl}/metro1/getAllMetro`);
  }

  deleteMetro(id: number): Observable<any> {

    console.log("inside service")
    return this.http.delete(`${this.baseUrl}/metro1/deleteMetro/${id}`,{responseType:'text'});
  }

  searchMetro(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/metro1/getOneMetro/${id}`)
  }

  updateMetro(metro: object): Observable<object> {
    console.log("Inside upate service class");
    console.log(metro);
    return this.http.put(`${this.baseUrl}/metro1/updateMetro/${id}`,metro);
  }
}

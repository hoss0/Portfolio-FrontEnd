import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

//   URL = 'http://localhost:8080/educacion/';
//   constructor(private HttpClient : HttpClient) { }

//   public lista(): Observable<educacion[]>{
//     return this.HttpClient.get<educacion[]>(this. URL + 'lista');

//   }

//   public detail (id: number): Observable<educacion> {
//     return this.HttpClient.get<educacion>(this.URL + `detail/$(id)`); 
//   }
// public save(educacion: Educacion): Observable<any>{
//   return this.HttpClient.post<any>(this.URL + 'create' , educacion);
// }
//  public update (id: number, educacion: Educacion): Observable<any>{
//   return this.HttpClient.put<any>(this.URL + `update/${id}`, educacion);

//  }
//  public delete(id: number): Observable<any> {
//   return this.HttpClient.delete<any>(this.URL + `delete/${id}`);

//  }
 
}

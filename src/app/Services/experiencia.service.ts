import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/models/experiencia';

@Injectable()
export class ExperienciaService implements OnInit{
  // URL = 'http://localhost:8080/exp/';


  public getJsonValue: any;
  public postJasonValue: any;

  constructor(private HttpClient:HttpClient) { 
    
  }
  ngOnInit(): void {
  
  }
  

  public lista():Observable<Experiencia[]>{
    return this.HttpClient.get<Experiencia[]>("http://localhost:8080/exps", {
      headers: new HttpHeaders({
        "Authorization":"Basic dXN1YXJpbzoxMjM="})
    })
  }


  public detail(id:number): Observable<Experiencia>{
    const headder$ = new HttpHeaders({
      'Authorization': 'Basic dXN1YXJpbzoxMjM='
    });
    const requestOptions = { headers: headder$ };
    return this.HttpClient.get<Experiencia>(`http://localhost:8080/exp/detail/${id}`, requestOptions)
  }
  public save(experiencia: Experiencia): Observable<any>{
    const headder$ = new HttpHeaders({
      'Authorization': 'Basic dXN1YXJpbzoxMjM='
    });
    const requestOptions = { headers: headder$ };
    return this.HttpClient.post<any>('http://localhost:8080/exp/create', experiencia, requestOptions)
  }
  public update(id: number, experiencia: Experiencia): Observable<any>{
    const headder$ = new HttpHeaders({
      'Authorization': 'Basic dXN1YXJpbzoxMjM='
    });
    const requestOptions = { headers: headder$ };
    return this.HttpClient.put<any>(`http://localhost:8080/exp/update/${id}`, experiencia, requestOptions)
  }
  public delete(id: number):Observable<any>{
    const headder$ = new HttpHeaders({
      'Authorization': 'Basic dXN1YXJpbzoxMjM='
    });
    const requestOptions = { headers: headder$ };
    return this.HttpClient.delete<any>('http://localhost:8080/exp/delete/${id}', requestOptions)
  }


}

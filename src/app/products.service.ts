import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  getData():Observable<any>{
    return this.http.get(`${environment.apiURL}products/index`, {headers: { Authorization: `Token ${localStorage.getItem('token')}` } })
  }

  deleteData(id: string):Observable<any>{
    return this.http.delete(`${environment.apiURL}products/remove/${id}`, {headers: { Authorization: `Token ${localStorage.getItem('token')}` } })
  }

  saveData(data:any):Observable<any>{
    return this.http.post(`${environment.apiURL}products/create`, data, {headers: { Authorization: `Token ${localStorage.getItem('token')}` } })
  }

  updateData(data:any):Observable<any>{
    return this.http.put(`${environment.apiURL}products/update`, data, {headers: { Authorization: `Token ${localStorage.getItem('token')}` } })
  }
}

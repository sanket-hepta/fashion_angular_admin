import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get(`${environment.apiURL}categories/index`, {headers: { Authorization: `Token ${localStorage.getItem('token')}` } })
  }

  deleteData(id: string):Observable<any>{
    return this.http.post(`${environment.apiURL}categories/remove`, {id: id}, {headers: { Authorization: `Token ${localStorage.getItem('token')}` } })
    //return this.http.post(`${environment.apiURL}categories/remove`, {headers: { Authorization: `Token ${localStorage.getItem('token')}` } })
  }

  saveData(data:any):Observable<any>{
    return this.http.post(`${environment.apiURL}categories/create`, data, {headers: { Authorization: `Token ${localStorage.getItem('token')}` } })
  }

  updateData(data:any):Observable<any>{
    return this.http.put(`${environment.apiURL}categories/update`, data, {headers: { Authorization: `Token ${localStorage.getItem('token')}` } })
  }
}

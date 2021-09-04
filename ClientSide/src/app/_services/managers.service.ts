import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagersService {
  private baseUrl = 'http://localhost:8080/api/auth/managers';


  constructor(private http: HttpClient) { }



  getManagersList(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  deleteManagers(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateManagers(user: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + `/update`, user);
  }

  getManagers(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any>{
    return this.http.delete(this.baseUrl);
  }
}

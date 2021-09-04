import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HangarsService {
 
  private baseUrl = 'http://localhost:8080/api/auth/hangars';

  constructor(private http: HttpClient) { }

  createHangars(hangars: any): Observable<any> {
    return this.http.post(this.baseUrl, hangars);
  }

  deleteHangars(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getHangarsList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  getHangars(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateHangars(hangar: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + `/update`, hangar);
  }
}

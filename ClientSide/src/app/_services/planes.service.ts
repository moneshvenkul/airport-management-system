import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanesService {
  private baseUrl = 'http://localhost:8080/api/auth/planes';

  constructor(private http: HttpClient) {}

  createPlanes(planes: any): Observable<any> {
    return this.http.post(this.baseUrl, planes);
  }

  deletePlanes(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getPlanesList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  getPlanes(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updatePlanes(plane: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + `/update`, plane);
  }


}

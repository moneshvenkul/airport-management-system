import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PilotsService {
  private baseUrl = 'http://localhost:8080/api/auth/pilots';

  constructor(private http: HttpClient) { }

  createPilots(pilots: any): Observable<any> {
    return this.http.post(this.baseUrl, pilots);
  }

  deletePilots(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getPilotsList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  getPilots(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updatePilots(pilot: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + `/update`, pilot);
  }
}

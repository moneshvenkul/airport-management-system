import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllocatedplanesService {

  private baseUrl = 'http://localhost:8080/api/auth/allocatedplanes';

  constructor(private http: HttpClient) { }

  getAllocatedplanesList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnallocatedplanesService {
  private baseUrl = 'http://localhost:8080/api/auth/unallocatedplanes';

  constructor(private http: HttpClient) { }

  getUnallocatedplanesList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}

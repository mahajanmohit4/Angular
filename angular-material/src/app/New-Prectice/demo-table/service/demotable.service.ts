import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemotableService {
  private base_url = 'http://localhost:3000/posts';
  private base_url1 = 'http://localhost:3000/new_data';
  constructor(private httpClient: HttpClient) {}
  getData(): Observable<any> {
    return this.httpClient.get(this.base_url);
  }
  getData1(): Observable<any> {
    return this.httpClient.get(this.base_url1);
  }
  updateData(data): Observable<any> {
    return this.httpClient.post(this.base_url1, data);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class KitServiceService {
  apiUrl = 'https://alahlystore.somee.com/api/Shirts';
  constructor(private http: HttpClient) {}
  //kit image
  kitImage(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}

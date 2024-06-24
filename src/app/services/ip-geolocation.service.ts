import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpGeolocationService {

  private apiKey = '6da855818f8047a2b867c2dcebfe3590';  // Reemplaza con tu clave API de Abstract
  private apiUrl = `https://ipgeolocation.abstractapi.com/v1/?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getGeolocation(ip?: string): Observable<any> {
    const url = ip ? `${this.apiUrl}&ip_address=${ip}` : this.apiUrl;
    return this.http.get(url);
  }
}

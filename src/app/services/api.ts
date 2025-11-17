import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatusResponse } from './api.interfaces';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient)
   private apiUrl = environment.apiUrl;


   getStatus(): Observable<StatusResponse> {
    return this.http.get<StatusResponse>(`${this.apiUrl}/api_entry/status`);
  }

  getHello(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.apiUrl}/api_entry/hello`);
  }
}

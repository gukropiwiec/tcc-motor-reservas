/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HotelService } from './hotel.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private userS: UserService,
    private hotelS: HotelService
  ) {}

  login(data) {
    return this.http.post(`${this.apiUrl}/login`, data).toPromise();
  }

  loginAdmin(data) {
    return this.http.post(`${this.apiUrl}/login-admin`, data).toPromise();
  }

  post(routeEndpoint: string, data: any) {
    const jwt = this.getToken();
    return this.http
      .post(`${this.apiUrl}/${routeEndpoint}`, data, {
        headers: { Authorization: jwt },
        params: { hotelId: this.hotelS.hotel.id },
      })
      .toPromise();
  }

  get(routeEndpoint: string) {
    const jwt = this.getToken();
    return this.http
      .get(`${this.apiUrl}/${routeEndpoint}`, {
        headers: { Authorization: jwt },
        params: { hotelId: this.hotelS.hotel.id },
      })
      .toPromise();
  }

  getById(routeEndpoint: string, id) {
    const jwt = this.getToken();
    return this.http
      .get(`${this.apiUrl}/${routeEndpoint}/${id}`, {
        headers: { Authorization: jwt },
        params: { hotelId: this.hotelS.hotel.id },
      })
      .toPromise();
  }

  put(routeEndpoint: string, data: any, id) {
    const jwt = this.getToken();
    return this.http
      .put(`${this.apiUrl}/${routeEndpoint}/${id}`, data, {
        headers: { Authorization: jwt },
        params: { hotelId: this.hotelS.hotel.id },
      })
      .toPromise();
  }

  delete(routeEndpoint: string, id) {
    const jwt = this.getToken();
    return this.http
      .delete(`${this.apiUrl}/${routeEndpoint}/${id}`, {
        headers: { Authorization: jwt },
        params: { hotelId: this.hotelS.hotel.id },
      })
      .toPromise();
  }

  getToken(): string {
    return this.userS.token ? this.userS.token : '';
  }
}

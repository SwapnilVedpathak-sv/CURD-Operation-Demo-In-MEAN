import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'http://localhost:8000';
  readonly AllCertificate = '/ndsCertificateData';
  readonly register = '/registerUser';
  readonly login = '/loginUser';

  getList() {
    return this.http.get(`${this.baseUrl}${this.AllCertificate}`);
  }

  registerUser(body: any) {
    return this.http.post(`${this.baseUrl}${this.register}`, body, {
      observe: 'body',
    });
  }

  loginUser(body: any) {
    return this.http.post(`${this.baseUrl}${this.login}`, body, {
      observe: 'body',
    });
  }

}

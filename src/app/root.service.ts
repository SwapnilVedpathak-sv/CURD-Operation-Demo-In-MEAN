import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'http://localhost:8000';
  readonly AllProducts = '/ndsCertificateData';
  readonly register = '/registerUser';
  readonly login = '/loginUser';

  getProductList() {
    return this.http.get(`${this.baseUrl}${this.AllProducts}`);
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

  saveProduct(body: any) {
    return this.http.post(`${this.baseUrl}${this.AllProducts}`, body);
  }

  updateProduct(id: any, data: any) {
    return this.http.put(`${this.baseUrl}${this.AllProducts}/${id}`, data)
  }

  deleteProduct(id: any) {
    return this.http.delete(`${this.baseUrl}${this.AllProducts}/${id}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { } 
  getProductData(){
    let productUrl = "http://localhost:8085/api/products"; 
    return this.http.get(productUrl);
  }
}

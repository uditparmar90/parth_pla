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

  navData = {
    "Plastic Extrusion Plants":{
      "PP Tape Fibrillated Extrusion Plant":"PP Tape Fibrillated Extrusion Plant", 
      "PP / HDPE Monofilament Extrusion Yarn Plant":"PP / HDPE Monofilament Extrusion Yarn Plant",       
      "Mono Danline Extrusion Plant":"Mono Danline Extrusion Plant", 
      "Danline Extrusion Plant":"Danline Extrusion Plant",
      "Baler Twine Extrusion Plant":"Baler Twine Extrusion Plant", 
      "Sutil Extrusion Plant":"Sutil Extrusion Plant"
    }, 
    "Rope Making Machine":{
      "Rope Making Machine 2-6mm":"Rope Making Machine 2-6mm",
      "Rope Making Machine 4-8mm":"Rope Making Machine 4-8mm",  
      "Rope Making Machine 6-12mm":"Rope Making Machine 6-12mm",  
      "Rope Making Machine 8-16mm":"Rope Making Machine 8-16mm",  
      "Rope Making Machine 12-24mm":"Rope Making Machine 12-24mm", 
      "Rope Making Machine 18-40mm":"Rope Making Machine 18-40mm"
    }, 
    "Winder":{
      "Bobbin Winder":"Bobbin Winder", 
      "Cheeze Winde":"Cheeze Winde", 
      "Roll Winder":"Roll Winder"
    }
  } 
}
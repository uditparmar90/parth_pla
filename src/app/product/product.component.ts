import { Component } from '@angular/core';
import { AppService } from '../app.service'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {  
  data:any;

  constructor(private product:AppService){
    this.product.getProductData().subscribe(data=>{
      console.log(data); 
      this.data = data; 
      })
  }
}

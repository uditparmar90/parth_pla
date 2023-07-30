import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit{ 
  data1:any; 
  productNameData:any;
  constructor(public navData:AppService){} 

  getValue(name:string){
    let productId = "name_1"; 
    this.navData.getSpecificProductByName(productId).subscribe((data:any)=>{ 
      console.log(data);
      return this.productNameData = data; 
    })
  }

  ngOnInit(): void {
    
  } 
}

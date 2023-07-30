import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit{ 
  data1:any;
  constructor(public navData:AppService){} 

  getValue(name:string){
    let productId = name;
    console.log(productId); 
    this.navData.getSpecificProduct(productId); 
    this.navData.getSpecificProduct(productId).subscribe((data: any)=>{
      console.log(data);
      return this.data1 = data; 
    })
  }

  ngOnInit(): void {
    
  } 
}

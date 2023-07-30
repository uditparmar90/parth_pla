import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit{ 
  constructor(public navData:AppService){} 

  getValue(name:string){
    let productId = name;
    console.log(productId); 
    this.navData.getSpecificProduct(productId); 
  }

  ngOnInit(): void {
    
  } 
}

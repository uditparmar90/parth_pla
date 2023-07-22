import { Component } from '@angular/core'; 
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {
  constructor() {}
  product = {
    productName: '',
    image: '',
    description: '',
    isActive: false
  };
  onSubmit(form: NgForm) { 
    if (form.valid) { 
      // Handle form submission logic here 
      this.product.productName = form.value.productName; 
      this.product.image = form.value.image; 
      this.product.description = form.value.description; 
      this.product.isActive = form.value.isActive; 
      console.log(form);
      console.log(this.product);
    }
    else{
      console.log(form);
    }
  } 
  onImageChange(event: any) {
    const file = event.target.files[0]; 
    console.log(file);
    // Handle the file upload logic here
  }
}

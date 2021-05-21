import { Component } from '@angular/core';

import { Products, ProductService } from './product.service';

export class ProductCategory {
  ProductCategoryId: number = 0;
  ProductCategoryName: string = '';

}

export class ProductSubCategory {
  ProductSubCategoryId: number = 0;
  ProductSubCategoryName: string = '';
  ProductCategoryId: number = 0;
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // productObject1: Products = new Products();
  // productObject2: Products = new Products();
  // productObject3: Products = new Products();
  // productObject4: Products = new Products();

 
allProducts:Products[]=[];

  title = 'newproject';
  Name: string='';
  constructor(private ProductServiceApi: ProductService) {

    this.Name=this.ProductServiceApi.productName;

    this.allProducts=this.ProductServiceApi.ProductArray;
   this.ProductServiceApi.GetProductData().subscribe(
     (rawdata:any)=>{
       this.allProducts=rawdata;
     }
   )
debugger;
  }
}

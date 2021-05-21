import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

export class Products {
  ProductId: Number = 0;
  ProductName: string = '';
  ProductFeatures: string = '';
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productName: string = 'Laptop';
  productObject: Products = new Products();
  ProductArray: Products[] = [];
  constructor(private http: HttpClient) {
    // for (var i: number = 1; i <= 100; i++) {
    //   this.productObject = new Products;
    //   this.productObject.ProductId = i;
    //   this.productObject.ProductName = 'hp' + i;
    //   this.productObject.ProductFeatures = '8GB RAM, 1TB HDD';
    //   this.ProductArray.push(this.productObject)
    // }
  }
  GetProductData(): Observable<any> {
    var data=this.http.get('https://localhost:44362/api/allproducts')
    return data;

  }
  

}

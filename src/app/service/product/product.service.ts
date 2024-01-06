import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/products.model';

const BASE_URL = ['http://localhost:8080/']

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }


  getAll(): Observable<Products[]> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Products[]>(BASE_URL + "api/products", { headers });
  }

  getProductById(id: any): Observable<Products> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<Products>(BASE_URL + "api/product/" +id, { headers})
  }

  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken) {
      console.log("JWT token found in the Local Storage");
      return new HttpHeaders().set(
        'Authorization', 'Bearer ' + jwtToken
      )
    } else {
      console.log("JWT token not found in the Local Storage");
      return new HttpHeaders();
    }
  }

  private selectedProduct: any;

  setSelectedProduct(product: any) {
    this.selectedProduct = product;
  }

  getSelectedProduct(): any {
    return this.setSelectedProduct;
  }


}

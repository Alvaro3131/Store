import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL='http://localhost:3000/products';
  constructor(private hhtp:HttpClient) { }
  getProducts():Observable<Product[]>{
    return this.hhtp.get<Product[]>(this.apiURL);
  }

}

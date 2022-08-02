import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Product } from '../interface/product.interface';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!:Product[];
  constructor(private productSVC:ProductService) { }

  ngOnInit(): void {
    this.productSVC.getProducts()
    .pipe(
      tap((products: Product[])=> this.products=products)
    )
    .subscribe();
  }

}

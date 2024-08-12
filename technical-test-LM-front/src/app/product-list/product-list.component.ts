import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Product } from "../model/product.model";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.loadProducts();
  }

  public loadProducts(): void {
    this.productService.getProducts().subscribe({
        next: (data) => this.products = data,
        error: (e) => console.error('Error fetching products', e)
      }
    )
  }

  public onProductAdded() {
    this.loadProducts();
  }
}

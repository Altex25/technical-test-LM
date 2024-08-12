import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductFormComponent } from "./product-form/product-form.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ProductFormComponent, ProductListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'technical-test-LM-front';

  @ViewChild(ProductListComponent) productListComponent!: ProductListComponent;

  public onProductAdded() {
    this.productListComponent.loadProducts();
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from "../product.service";
import { Product } from "../model/product.model";


@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  public form: FormGroup;

  @Output() productAdded = new EventEmitter<Product>()

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]]
    })
  }

  onSubmit() {
    if(this.form.valid) {
      const newProduct: Product = {
        name: this.form.get('name')?.value,
        price: this.form.get('price')?.value
      }
      this.productService.createProduct(newProduct).subscribe({
        next: (response) => {
          this.productAdded.emit();
          this.form.reset();
        },
        error: (e) => console.error('Error while creating', e)
      });
    }

  }
}

import { ProductService } from './../../services/product';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  imports: [
    FormsModule,
    CommonModule
    ],
  templateUrl: './product-form.html'
})
export class ProductFormComponent {
  product: Product = { name: '', description: '', price: 0 };

  constructor(private productService: ProductService, private router: Router) {}

  save(): void {
    this.productService.create(this.product).subscribe(() => this.router.navigate(['/']));
  }
}

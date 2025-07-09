import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from './../../services/product';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [
    FormsModule,
    CommonModule
    ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchTerm = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.productService.getAll().subscribe(data => this.products = data);
  }

  search(): void {
    if (this.searchTerm.trim()) {
      this.productService.search(this.searchTerm).subscribe(data => this.products = data);
    } else {
      this.loadAll();
    }
  }

  delete(id: number): void {
    this.productService.delete(id).subscribe(() => this.loadAll());
  }

  update(id: number, product: Product): void {
    this.productService.update(id, product).subscribe(() => this.loadAll());
  }
}

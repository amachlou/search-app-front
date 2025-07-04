import { Component, OnInit, NgModule } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';

// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  imports: [
    // BrowserModule,
    FormsModule, // ✅ Add FormsModule here
    CommonModule,
    HttpClientModule
    ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchTerm = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAll().subscribe(data => this.products = data);
  }

  onSearch() {
    if (this.searchTerm.trim()) {
      this.productService.search(this.searchTerm).subscribe(data => this.products = data);
    } else {
      this.ngOnInit(); // Reset list
    }
  }
}


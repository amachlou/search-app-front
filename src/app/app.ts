import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list";
import { ProductForm } from "./components/product-form/product-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, ProductForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'search-app-front';
}
function provideHttpClient(): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}


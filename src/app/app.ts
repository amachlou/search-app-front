import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'search-app-front';
}
function provideHttpClient(): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}


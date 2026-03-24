
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('route');
  searchTerm = '';

  items = [
    { name: 'Mobile' },
    { name: 'Laptop' },
    { name: 'Watch' },
    { name: 'Tablet' }
  ];

}

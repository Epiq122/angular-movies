import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe, DatePipe, NgFor, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  movies = [
    {
      title: 'Spider-Man',
      releaseDate: new Date(),
      price: 316.99,
    },
    {
      title: 'Moana',
      releaseDate: new Date('2016-05-03'),
      price: 23.99,
    },
  ];
}

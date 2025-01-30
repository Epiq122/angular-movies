import { Component, Input } from '@angular/core';
import {
  CurrencyPipe,
  DatePipe,
  NgOptimizedImage,
  UpperCasePipe,
} from '@angular/common';
import { GenericListComponent } from '../../shared/components/generic-list/generic-list.component';

@Component({
  selector: 'app-movies-list',
  imports: [
    DatePipe,
    UpperCasePipe,
    CurrencyPipe,
    NgOptimizedImage,
    GenericListComponent,
  ],

  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  @Input({ required: true })
  movies!: any[];

  addMovie() {
    this.movies.push({
      title: 'Die Hard',
      releaseDate: new Date('1989-01-02'),
      price: 680.99,
    });
  }

  removeMovie(movie: any) {
    let index = this.movies?.findIndex(
      (movie: any) => movie.title === movie.title,
    );
    this.movies.splice(index!, 1);
  }
}

import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  imports: [MatButton, MatIcon, RouterLink],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css',
})
export class CreateMovieComponent {}

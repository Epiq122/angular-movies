import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-index-genres',
  imports: [RouterLink, MatIcon, MatButton],
  templateUrl: './index-genres.component.html',
  styleUrl: './index-genres.component.css',
})
export class IndexGenresComponent {}

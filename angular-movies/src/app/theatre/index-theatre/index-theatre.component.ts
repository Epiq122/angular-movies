import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index-theaters',
  imports: [MatButton, MatIcon, RouterLink],
  templateUrl: './index-theatre.component.html',
  styleUrl: './index-theatre.component.css',
})
export class IndexTheatreComponent {}

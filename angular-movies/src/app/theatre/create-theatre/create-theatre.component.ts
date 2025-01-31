import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-theater',
  imports: [MatButton, MatIcon, RouterLink],
  templateUrl: './create-theatre.component.html',
  styleUrl: './create-theatre.component.css',
})
export class CreateTheatreComponent {}

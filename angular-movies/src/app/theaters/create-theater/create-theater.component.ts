import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-theater',
  imports: [MatButton, MatIcon, RouterLink],
  templateUrl: './create-theater.component.html',
  styleUrl: './create-theater.component.css',
})
export class CreateTheaterComponent {}

import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-index-actors',
  imports: [MatButton, RouterLink, MatIcon],
  templateUrl: './index-actors.component.html',
  styleUrl: './index-actors.component.css',
})
export class IndexActorsComponent {}

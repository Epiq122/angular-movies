import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-create-genre',
  imports: [MatButton],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css',
})
export class CreateGenreComponent {
  router = inject(Router);

  saveChanges() {
    // save changes.

    this.router.navigate(['/genres']);
  }
}

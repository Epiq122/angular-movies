import { Component, inject } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { firstLetterShouldBeUpperCase } from '../../shared/functions/validations';

@Component({
  selector: 'app-create-genre',
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
  ],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css',
})
export class CreateGenreComponent {
  router = inject(Router);
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: [
      '',
      { validators: [Validators.required, firstLetterShouldBeUpperCase()] },
    ],
  });

  getErrorMessagesForName(): string {
    let field = this.form.controls.name;

    if (field.hasError('required')) return 'The name field is required';

    if (field.hasError('firstLetterShouldBeUpperCase'))
      return field.getError('firstLetterShouldBeUpperCase')?.message;

    return '';
  }

  saveChanges() {
    // save changes.
    console.log(this.form.value);

    this.router.navigate(['/genres']);
  }
}

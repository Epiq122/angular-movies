import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstLetterShouldBeUpperCase } from '../../shared/functions/validations';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { GenreCreationDTO, GenreDTO } from '../genres.models';

@Component({
  selector: 'app-genres-form',
  imports: [
    MatAnchor,
    MatLabel,
    MatError,
    MatButton,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    RouterLink,
  ],
  templateUrl: './genres-form.component.html',
  styleUrl: './genres-form.component.css',
})
export class GenresFormComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: [
      '',
      { validators: [Validators.required, firstLetterShouldBeUpperCase()] },
    ],
  });

  @Input()
  model?: GenreDTO;

  @Output()
  postForm = new EventEmitter<GenreCreationDTO>();

  getErrorMessagesForName(): string {
    let field = this.form.controls.name;

    if (field.hasError('required')) return 'The name field is required';

    if (field.hasError('firstLetterShouldBeUpperCase'))
      return field.getError('firstLetterShouldBeUpperCase')?.message;

    return '';
  }

  saveChanges() {
    const genre = this.form.value as GenreCreationDTO;

    this.postForm.emit(genre);
  }

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }
}

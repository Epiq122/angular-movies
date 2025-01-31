import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-edit-theater',
  imports: [],
  templateUrl: './edit-theatre.component.html',
  styleUrl: './edit-theatre.component.css',
})
export class EditTheatreComponent {
  @Input({ transform: numberAttribute })
  id!: number;
}

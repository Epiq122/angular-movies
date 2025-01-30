import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-rating',
  imports: [MatIcon, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent {
  @Input({ required: true, transform: (value: number) => Array(value).fill(0) })
  maxRating!: any[];

  @Input()
  selectedRating = 0;

  clickedRating = 0;

  handleMouseEnter(index: number) {
    this.selectedRating = index + 1;
  }

  handleMouseLeave() {
    if (this.clickedRating !== 0) {
      this.selectedRating = this.clickedRating;
    } else {
      this.selectedRating = 0;
    }
  }

  handleClick(index: number) {
    this.selectedRating = index + 1;
    this.clickedRating = this.selectedRating;
  }
}

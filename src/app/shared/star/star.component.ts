import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  range: number[] = [];
  hasFraction: boolean = false;

  constructor() { }

  ngOnInit() {
    let roundedRating = Math.trunc(this.rating);
    for (let i = 0; i < roundedRating; i++) {
      this.range.push(i);
    }
    if (roundedRating !== this.rating) {
      this.hasFraction = true;
    }
  }

}

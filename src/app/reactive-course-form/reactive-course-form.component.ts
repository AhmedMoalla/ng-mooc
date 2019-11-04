import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-course-form',
  templateUrl: './reactive-course-form.component.html',
  styleUrls: ['./reactive-course-form.component.css']
})
export class ReactiveCourseFormComponent implements OnInit {
  
  urlRegex: RegExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  courseForm: FormGroup = new FormGroup({
    title: new FormControl(),
    image: new FormControl(),
    category: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    rating: new FormControl()
  });

  constructor() { }

  ngOnInit() {
    // use patchValue when setting SOME controls values
    // use setValue when setting ALL controls values
    this.courseForm.patchValue({
      price: 0,
      rating: 0
    });
  }

  save() {
    console.log('Created course:', this.courseForm.value);
  }

}

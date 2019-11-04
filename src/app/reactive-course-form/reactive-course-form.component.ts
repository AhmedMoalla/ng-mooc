import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-course-form',
  templateUrl: './reactive-course-form.component.html',
  styleUrls: ['./reactive-course-form.component.css']
})
export class ReactiveCourseFormComponent implements OnInit {
  
  urlRegex: RegExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  courseForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.courseForm = this.fb.group({
      title: this.fb.control(''),
      image: [''], // This is equivalent to the line above
      category: '', // This is equivalent too
      description: '',
      price: 0,
      rating: 0
    });
  }

  save() {
    console.log('Created course:', this.courseForm.value);
  }

}

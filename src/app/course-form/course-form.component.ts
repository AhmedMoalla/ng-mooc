import { Component, OnInit } from '@angular/core';
import { Course } from '../course-list/course-list.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  urlRegex: RegExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  course: Course = {
    title: '',
    image: '',
    category: '',
    description: '',
    price: 0,
    rating: 0,
  }

  constructor() { }

  ngOnInit() {
  }

  save(courseForm: NgForm) {
    console.log('Created course:', courseForm.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { Course } from '../course-list/course-list.component';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;

  constructor() { }

  ngOnInit() {
  }

}

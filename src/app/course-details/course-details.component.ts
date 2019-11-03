import { Component, OnInit } from '@angular/core';
import { Course } from '../course-list/course-list.component';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseId: number;
  course: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.courseId = +this.activatedRoute.snapshot.params.id;
    this.courseService.getCourseById(this.courseId)
      .subscribe(course => this.course = course);
  }

}

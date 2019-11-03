import { Component, OnInit } from '@angular/core';
import { Course } from '../course-list/course-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course$: Observable<Course>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.course$ = this.activatedRoute.paramMap
      .pipe(
        map(params => +params.get('id')),
        switchMap(id =>  this.courseService.getCourseById(id))
      );
  }

  onBack() {
    this.router.navigate(['/courses']);
  }

}

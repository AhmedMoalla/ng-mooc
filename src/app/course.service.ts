import { Injectable } from '@angular/core';
import { Course } from './course-list/course-list.component';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url: string = "http://website.com/api/courses";

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url)
      .pipe(
        tap(courses => console.log('Courses', courses)),
        catchError((err) => {
          console.log('An Error Happened', err.message);
          return throwError(err.message);
        })
      );
  }
}

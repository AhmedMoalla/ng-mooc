import { Injectable, Inject } from '@angular/core';
import { Course } from './course-list/course-list.component';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { API_URL } from './injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    @Inject(API_URL) private url: string,
    private http: HttpClient) { }

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

import { Component, OnInit } from '@angular/core';

export interface Course {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
  date: string;
  rating: number;
  public: boolean;
}

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  hideImages: boolean = false;
  _filter: string = '';

  courses: Course[] = [];

  filteredCourses: Course[];
  temporaryMessage = '';

  get filter() {
    return this._filter;
  }

  set filter(value) {
    this._filter = value;
    this.filterCourses(value);
  }
  constructor() { }

  ngOnInit() {
    this.filteredCourses = this.courses;
  }

  onClick() {
    this.hideImages = !this.hideImages;
  }

  filterCourses(filter: string) {
    if (!filter){
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(course => course.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
  }

  onRatingClicked(rating: number) {
    this.temporaryMessage = 'The clicked product is rated: ' + rating + '/5';
    setTimeout(() => this.temporaryMessage = '', 2000);
  }
}

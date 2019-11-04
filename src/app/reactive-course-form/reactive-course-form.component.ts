import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

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
      title: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      image: ['', [Validators.required, Validators.pattern(this.urlRegex)]], // This is equivalent to the line above
      category: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      description: this.fb.control('', [Validators.maxLength(100)]),
      price: this.fb.control(0, [Validators.required, this.rangeValidator]),
      rating: this.fb.control(0, [Validators.required, this.rangeValidator])
    });
  }

  rangeValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value < 0 || control.value > 5) {
      return { range: { min: 0, max: 5 } };
    }
    return null;
  }

  save() {
    console.log('Created course:', this.courseForm.value);
  }

}

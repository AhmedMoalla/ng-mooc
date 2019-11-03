import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CustomIdPipe } from './course-list/custom-id.pipe';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './shared/star/star.component';
import { CourseService } from './course.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CustomIdPipe,
    StarComponent
  ],
  imports: [
    // Default module to import for application running in the browser
    BrowserModule,
    // Needed for ngModel
    FormsModule,
    // Used by Angular Material
    NoopAnimationsModule,

    // Angular Material Components
    MatToolbarModule, // <mat-toolbar></mat-toolbar>
    MatIconModule, // <mat-icon></mat-icon>
    MatButtonModule, // mat-button
    MatCardModule, // <mat-card></mat-card>
    MatInputModule, // matInput
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

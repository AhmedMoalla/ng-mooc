import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent
  ],
  imports: [
    // Default module to import for application running in the browser
    BrowserModule,

    // Angular Material Components
    MatToolbarModule, // <mat-toolbar></mat-toolbar>
    MatIconModule, // <mat-icon></mat-icon>
    MatButtonModule // mat-button
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

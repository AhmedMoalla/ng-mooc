import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, InjectionToken } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CustomIdPipe } from './course-list/custom-id.pipe';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeCourseBackend } from './inmemory-backend.service';
import { API_URL } from './injection-tokens';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CustomIdPipe,
    StarComponent,
    HomeComponent
  ],
  imports: [
    // Default module to import for application running in the browser
    BrowserModule,
    // Needed for ngModel
    FormsModule,
    // Used by Angular Material
    NoopAnimationsModule,
    // Used to provide HttpClient
    HttpClientModule,
    // Used to fake a backend service (MUST be imported after HttpClientModule)
    HttpClientInMemoryWebApiModule.forRoot(FakeCourseBackend),

    // Angular Material Components
    MatToolbarModule, // <mat-toolbar></mat-toolbar>
    MatIconModule, // <mat-icon></mat-icon>
    MatButtonModule, // mat-button
    MatCardModule, // <mat-card></mat-card>
    MatInputModule, // matInput
  ],
  providers: [
    { provide: API_URL, useValue: 'http://website.com/api/courses' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

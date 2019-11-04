import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CustomIdPipe } from './course-list/custom-id.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from './shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeCourseBackend } from './inmemory-backend.service';
import { API_URL } from './injection-tokens';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseIdGuard } from './course-id.guard';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReactiveCourseFormComponent } from './reactive-course-form/reactive-course-form.component';

const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailsComponent, canActivate: [CourseIdGuard] },
  { path: 'create-course', component: ReactiveCourseFormComponent/*CourseFormComponent*/ },
  { path: 'home', component: HomeComponent },
  // pathMatch: 'full' is needed because '' matches everything so we need to tell the router that it must exactly match ''
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CustomIdPipe,
    StarComponent,
    HomeComponent,
    CourseDetailsComponent,
    CourseFormComponent,
    ReactiveCourseFormComponent
  ],
  imports: [
    // Default module to import for application running in the browser
    BrowserModule,
    // Needed for template-driven forms
    FormsModule,
    // Needed for reactive forms
    ReactiveFormsModule,
    // Used by Angular Material
    NoopAnimationsModule,
    // Used to provide HttpClient
    HttpClientModule,
    // Used to fake a backend service (MUST be imported after HttpClientModule)
    HttpClientInMemoryWebApiModule.forRoot(FakeCourseBackend),
    // Used to provide routing functionality
    RouterModule.forRoot(routes),

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

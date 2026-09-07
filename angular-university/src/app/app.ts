import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseCard } from "./course-card/course-card";

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, FormsModule, CourseCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-university');
}

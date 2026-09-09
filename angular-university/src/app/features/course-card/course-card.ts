import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  title = signal('Hello');

  changeTitle(newTitle: string) {
    this.title.set(newTitle);
  }
}

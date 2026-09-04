import { DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Task } from '../dummy-tasks';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-task',
  imports: [DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  taskData = input.required<Task>();

  // complete task action
  completeTask = output<string>({ alias: 'onComplete' });

  // complete task handler
  onCompleteTask() {
    this.completeTask.emit(this.taskData().id);
  }
}

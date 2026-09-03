import { DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';

type Task = (typeof dummyTasks)[0];

@Component({
  selector: 'app-task',
  imports: [DatePipe],
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

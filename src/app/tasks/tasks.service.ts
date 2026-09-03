import { Injectable, signal } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { TaskFormValue } from './task-form/task-form.component';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private taskList = signal(dummyTasks);

  getUserTaskList(userId: string | null) {
    return this.taskList().filter((task) => task.userId === userId);
  }

  addNewUserTask(taskData: TaskFormValue, userId: string) {
    this.taskList.update((prev) => [
      ...prev,
      {
        id: `t${this.taskList().length + 1}`,
        userId: userId,
        summary: taskData.summary,
        title: taskData.title,
        dueDate: taskData.dueDate,
      },
    ]);
  }

  removeTask(taskId: string) {
    this.taskList.update((prev) => prev.filter((task) => task.id !== taskId));
  }

  completeTask(taskId: string) {
    this.taskList.update((prev) => prev.filter((task) => task.id !== taskId));
  }
}

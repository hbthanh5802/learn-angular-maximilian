import { Injectable, signal } from '@angular/core';
import { dummyTasks, Task } from '../dummy-tasks';
import { TaskFormValue } from './task-form/task-form.component';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private taskList = signal<Task[]>([]);
  private static taskListKey = 'angular-task-list';

  constructor() {
    const storedTasks = localStorage.getItem(TasksService.taskListKey);
    this.taskList.set(storedTasks ? (JSON.parse(storedTasks) as Task[]) : dummyTasks)
  }

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
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.taskList.update((prev) => prev.filter((task) => task.id !== taskId));
    this.saveTasks();
  }

  completeTask(taskId: string) {
    this.taskList.update((prev) => prev.filter((task) => task.id !== taskId));
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem(TasksService.taskListKey, JSON.stringify(this.taskList()))
  }
}

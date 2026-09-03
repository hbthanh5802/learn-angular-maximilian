import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterByStatusPipe } from './task-list.pipe';

interface Task {
  id: string;
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-task-list',
  imports: [FormsModule, FilterByStatusPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = signal<Task[]>([]);
  taskTitle = '';
  statusFilter = ''

  addTask() {
    const title = this.taskTitle.trim();
    if (!title) return;

    this.tasks.update((prev) => [...prev, {
      id: `${new Date().getTime()}`,
      title: this.taskTitle,
      done: false,
    }])

    this.taskTitle = '';
  }

  removeTask(taskId: string) {
    if (!taskId || !taskId.trim()) return;

    this.tasks.update((prev) => prev.filter((task) => task.id !== taskId));
  }

  toggleDone(taskId: string) {
    if (!taskId || !taskId.trim()) return;

    this.tasks.update((prev) => prev.map((task) => task.id === taskId ? { ...task, done: !task.done } : task));
  }
}

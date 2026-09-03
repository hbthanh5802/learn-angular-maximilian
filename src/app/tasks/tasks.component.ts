import { Component, computed, inject, input, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from '../task/task.component';
import {
  TaskFormComponent,
  TaskFormValue,
} from './task-form/task-form.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, TaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string | null>();
  private tasksService = inject(TasksService);

  isOpenTaskForm = signal(false);

  currentUser = computed(() =>
    DUMMY_USERS.find((user) => user.id === this.userId()),
  );

  currentUserTaskList = computed(() =>
    this.tasksService.getUserTaskList(this.userId()),
  );

  handleCompleteTask(taskId: string) {
    this.tasksService.completeTask(taskId);
  }

  onCreateTaskBtnClick() {
    this.isOpenTaskForm.set(true);
  }

  onCancelCreateTaskBtnClick() {
    this.isOpenTaskForm.set(false);
  }

  onSubmitCreateTask(formData: TaskFormValue) {
    console.log('FORM SUBMIT', formData);
    const currentUser = this.currentUser();
    if (!currentUser) {
      return;
    }

    this.tasksService.addNewUserTask(formData, currentUser.id);
    this.isOpenTaskForm.set(false);
  }
}

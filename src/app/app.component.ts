import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './test/task-list/task-list.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userList = DUMMY_USERS;
  selectedUserId: string | null = DUMMY_USERS.length ? DUMMY_USERS[0].id : null;

  onSelectUser(userId: string) {
    this.selectedUserId = userId;
  }
}

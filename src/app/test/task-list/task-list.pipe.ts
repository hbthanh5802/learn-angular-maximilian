import { Pipe, PipeTransform } from '@angular/core';

interface Task {
  id: string;
  title: string;
  done: boolean;
}

@Pipe({
  name: 'filterByStatus',
  standalone: true,
})
export class FilterByStatusPipe implements PipeTransform {
  transform(tasks: Task[], status: 'all' | 'done' | 'pending'): Task[] {
    if (status === 'all') return tasks;
    return tasks.filter(task => (status === 'done' ? task.done : !task.done));
  }
}

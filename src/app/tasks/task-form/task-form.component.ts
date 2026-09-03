import { Component, computed, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type TaskFormValue = {
  title: string;
  summary: string;
  dueDate: string;
};

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  cancelForm = output({ alias: 'onCancel' });
  submitForm = output<TaskFormValue>({ alias: 'onSubmit' });
  isFormValid = signal(false);
  formValue = signal<TaskFormValue>({
    title: '',
    summary: '',
    dueDate: '',
  });

  titleOnly = computed(() => this.formValue().title);

  private validateForm() {
    if (
      !this.formValue().title ||
      !this.formValue().summary ||
      !this.formValue().dueDate
    ) {
      return false;
    }

    return true;
  }

  onDisplayData() {
    console.log('FORM DATA', this.formValue());
  }

  onCancel() {
    this.cancelForm.emit();
  }

  onFormChange() {
    this.isFormValid.set(this.validateForm());
  }

  onSubmit(e: Event) {
    e.preventDefault();
    if (!this.isFormValid()) {
      return;
    }

    this.submitForm.emit(this.formValue());
  }
}

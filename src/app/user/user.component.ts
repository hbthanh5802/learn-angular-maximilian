import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) userId!: string;
  avatar = input.required<string>();
  name = input.required<string>();
  isSelected = input<boolean>();

  fullAvatarPath = computed(() => `assets/users/${this.avatar()}`);

  @Output('customSelect') select = new EventEmitter<string>();
  anotherSelect = output<string>({ alias: 'customAnotherSelect' });

  get avatarPath() {
    return `assets/users/${this.avatar}`;
  }

  onClick() {
    this.select.emit(this.userId);
    this.anotherSelect.emit(this.userId);
  }
}

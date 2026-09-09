import { NgTemplateOutlet } from '@angular/common';
import { Component, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Dropdown } from './features/dropdown/dropdown';
import { DropdownChangeEvent, DropdownItem } from './features/dropdown/dropdown.type';
import { HighlightDirective } from "./shared/directives/highlight.directive";

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgTemplateOutlet, Dropdown, HighlightDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-university');
  isLoading = signal(false);

  selectedOption = '';

  @ViewChild(Dropdown)
  dropdown!: Dropdown;

  @ViewChild('highlight1', { read: HighlightDirective })
  highlight1!: HighlightDirective;

  dropdownItems: DropdownItem[] = [{
    label: 'Option A',
    value: 'A'
  }, {
    label: 'Option B',
    value: 'B'
  }]

  ngAfterViewInit() {
    console.log(this.highlight1)
  }

  showLoading() {
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
    }, 3000);
  }

  onDropdownSelected(params: DropdownChangeEvent) {
    if (params.option) {
      this.selectedOption = params.option.label;
    }
  }
}

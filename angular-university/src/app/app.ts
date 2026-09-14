import { NgTemplateOutlet } from '@angular/common';
import { Component, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Dropdown } from './features/dropdown/dropdown';
import { DropdownChangeEvent, DropdownItem } from './features/dropdown/dropdown.type';
import { HighlightDirective } from "./shared/directives/highlight.directive";
import { LazyRenderDirective } from "./shared/directives/lazy-render.directive";
import { RepeaterDirective } from "./shared/directives/repeater.directive";
import { TooltipDirective } from './shared/directives/tooltip.directive';
import { UnlessDirective } from "./shared/directives/unless.directive";

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgTemplateOutlet, Dropdown, HighlightDirective, TooltipDirective, UnlessDirective, RepeaterDirective, LazyRenderDirective],
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

  items = Array.from(
    { length: 50 },
    (_, index) => index + 1
  );

  ngAfterViewInit() {
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

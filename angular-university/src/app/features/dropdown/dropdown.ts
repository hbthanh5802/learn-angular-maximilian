import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, DOCUMENT, effect, ElementRef, HostListener, inject, input, linkedSignal, output, Renderer2, signal, TemplateRef } from '@angular/core';
import { DropdownChangeEvent, DropdownItem, DropdownItemContext } from './dropdown.type';

@Component({
  selector: 'app-dropdown',
  imports: [NgTemplateOutlet],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css',
})
export class Dropdown {
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);
  // Inject Host Element của chính component <app-dropdown>
  private elementRef = inject(ElementRef);

  /* Inputs */
  public items = input.required<DropdownItem[]>();
  public placeholder = input('Select');
  public disabled = input(false);
  public renderItem = input<TemplateRef<DropdownItemContext>>();

  public initialValue = input<string>('', { alias: 'defaultValue' });
  public selectedValue = linkedSignal(() => {
    return this.initialValue();
  });
  public selectedItem = computed(() => this.items().find((item) => item.value === this.selectedValue()));

  public isOpened = signal(false);

  /* Outputs */
  public select = output<DropdownChangeEvent>();

  constructor() {
    effect(() => {
      if (this.isOpened()) {
        this.renderer.addClass(this.document.body, 'no-scroll');
      } else {
        this.renderer.removeClass(this.document.body, 'no-scroll');
      }
    });
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, 'no-scroll');
  }

  // Lắng nghe click toàn màn hình để phát hiện click ra ngoài
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.isOpened()) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(event.target as Node);
    if (!clickedInside) {
      this.isOpened.set(false);
    }
  }

  isItemDisabled(item: DropdownItem) {
    return this.disabled() || item.disabled;
  }

  isItemSelected(item: DropdownItem) {
    return this.selectedValue() === item.value;
  }

  onToggleOpen() {
    this.isOpened.set(!this.isOpened())
  }

  onSelectedItem(item: DropdownItem) {
    if (this.isItemDisabled(item) || this.isItemSelected(item)) {
      return;
    }

    this.selectedValue.set(item.value);
    this.select.emit({ value: item.value, option: item });
    this.isOpened.set(false);
  }
}

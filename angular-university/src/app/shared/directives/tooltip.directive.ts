import { Directive, signal } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
  // Cho phép template export instance bằng cú pháp #tt="appTooltip"
  exportAs: 'appTooltip',
  host: {
    '(mouseenter)': 'show()',
    '(mouseleave)': 'hide()',
    '(focusin)': 'show()',
    '(focusout)': 'hide()',
    'style': 'position: relative; display: inline-block;'
  }
})
export class TooltipDirective {
  // Trạng thái hiển thị tooltip (Signal)
  public isVisible = signal(false);

  show() {
    this.isVisible.set(true);
  }

  hide() {
    this.isVisible.set(false);
  }

  toggle() {
    this.isVisible.update((v) => !v);
  }
}

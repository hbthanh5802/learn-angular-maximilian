import { Directive, ElementRef, HostListener, inject, input } from "@angular/core";

@Directive({
  selector: '[appHighlight]',
  standalone: true
})

export class HighlightDirective {
  private el = inject(ElementRef);
  private static DEFAULT_HIGHLIGHT_COLOR = 'yellow';

  constructor() {
    this.el.nativeElement.style.transition = 'all ease 200ms';
  }

  public highlightColor = input(HighlightDirective.DEFAULT_HIGHLIGHT_COLOR);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeBackgroundColor(this.highlightColor());
  }

  @HostListener('mouseleave')
  onMouseOver() {
    this.changeBackgroundColor('');
  }

  private changeBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

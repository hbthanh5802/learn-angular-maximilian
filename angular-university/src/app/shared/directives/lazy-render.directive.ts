import { Directive, inject, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[appLazyRender]',
  standalone: true,
})
export class LazyRenderDirective {
  private template = inject(TemplateRef);
  private container = inject(ViewContainerRef);
  private observer!: IntersectionObserver;

  ngOnInit() {
    const placeholder = document.createElement('div');
    this.container.element.nativeElement.before(placeholder);

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.observer.disconnect();
        this.container.createEmbeddedView(this.template);
        placeholder.remove();
      }
    }, { threshold: 0.2 })

    this.observer.observe(placeholder);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}

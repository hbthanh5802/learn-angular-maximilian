import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from "@angular/core";

export interface RepeaterContext<T> {
  $implicit: T;
  index: number;
}

@Directive({
  selector: '[appRepeater]',
  standalone: true,
})
export class RepeaterDirective<T> {
  private template = inject(TemplateRef);
  private container = inject(ViewContainerRef);

  appRepeater = input.required<T[]>();

  constructor() {
    effect(() => {
      this.container.clear();

      const items = this.appRepeater();

      items.forEach((item, index) => {
        this.container.createEmbeddedView(
          this.template,
          {
            $implicit: item,
            index,
          }
        );
      });
    });
  }
}

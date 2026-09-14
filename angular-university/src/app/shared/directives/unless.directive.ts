import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[appUnless]',
  standalone: true,
  exportAs: 'unless'
})

export class UnlessDirective {
  private template = inject(TemplateRef);
  private container = inject(ViewContainerRef);

  public appUnless = input.required<boolean>();
  public appUnlessElse = input<TemplateRef<unknown>>();

  private hasView = false;

  constructor() {
    effect(() => {
      // Luôn dọn dẹp view cũ trước khi render view mới
      this.container.clear();

      if (!this.appUnless()) {
        this.container.createEmbeddedView(this.template);
        this.hasView = true;
      } else {
        const elseTemplate = this.appUnlessElse();
        if (elseTemplate) {
          this.container.createEmbeddedView(elseTemplate);
        }
        this.hasView = false;
      }
    });
  }
}

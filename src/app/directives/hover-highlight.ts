import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
})
export class HoverHighlight {
  @Input() highlightColor: string = 'yellow';
  @Input() defaultColor: string = 'transparent';

  // ElementRef give access to the Dom elements this directive is applied to
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  private setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor(this.defaultColor);
  }
}

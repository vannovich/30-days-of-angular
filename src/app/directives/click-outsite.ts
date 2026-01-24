import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutsite]',
})
export class ClickOutsite {

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event']) onClick(event: Event){
    if(this.el.nativeElement.contains(event.target)){
      console.log("Clicked inside the elemen");
    }else{
      console.log("Clicked outside the element!");
    }
  }

}

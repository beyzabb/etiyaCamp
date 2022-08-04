import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClickedProductCard]'
})
export class ClickedProductCardDirective {
  isOnClick:boolean = false;
  constructor(private elementRef:ElementRef) { }
  
  @HostListener('click') onClick(){
    if(!this.isOnClick) {
      this.isOnClick=true;
      this.elementRef.nativeElement.style.opacity = 0.7;
    }
    
    else if (this.isOnClick){
      this.isOnClick=false;
      this.elementRef.nativeElement.style.opacity = 1;
    }
  }
}

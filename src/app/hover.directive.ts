import { Directive,ElementRef, OnInit,HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  myElement:any
  constructor(private el :ElementRef) {
    this.myElement = this.el.nativeElement;
   }
   ngOnInit(){
     console.log(this.myElement);
   }
   @HostListener('mouseover', ['$event'])
   onmouseover(e){
     this.el.nativeElement.style='color:red';
   }
   @HostListener('mouseout', ['$event'])
   onmouseout(e){
     this.el.nativeElement.style='color:white';
   }
   
   

}

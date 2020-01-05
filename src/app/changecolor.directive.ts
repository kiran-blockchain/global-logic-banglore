import { Directive ,HostListener,ElementRef} from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private el:ElementRef) { 
    console.log(this.el.nativeElement);
  }
  @HostListener('mouseover',['$event'])
  onmouseIn(e){
    console.log('mouse hovered');
    this.el.nativeElement.style='color:red';
  }
  @HostListener('mouseout', ['$event'])
  onmouseout(e){
    this.el.nativeElement.style='color:""';
  }


}

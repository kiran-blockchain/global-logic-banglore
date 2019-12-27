import { Directive,ElementRef,HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appRestrict]'
})
export class RestrictDirective implements OnInit {
  myElement:any
  constructor(private el :ElementRef) { }
  ngOnInit(){
      this.myElement = this.el.nativeElement;
  }
  @HostListener('keypress',['$event'])
  onkeypress(e){
    let regex = new RegExp(e.target.pattern);
      if(!regex.test(e.key)){
        e.preventDefault();
      }
  }
}

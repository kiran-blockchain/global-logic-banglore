import { Directive ,ElementRef, OnInit} from '@angular/core';
declare var $:any;
@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective implements OnInit{

  constructor(private el:ElementRef) {
    
   }
   ngOnInit(){
     $(this.el.nativeElement).datepicker();
   }

}

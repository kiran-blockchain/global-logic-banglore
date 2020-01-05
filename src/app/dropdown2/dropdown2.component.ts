import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown2',
  templateUrl: './dropdown2.component.html',
  styleUrls: ['./dropdown2.component.css']
})
export class Dropdown2Component implements OnInit {

  @Input()
  items:any
  constructor() {
    this.items=[{label:"Please Select",value:""}];
   }

  ngOnInit() {
  }

}

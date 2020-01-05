import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input()
  items=[];
  
  @Output()
  dataChange = new EventEmitter<any>();

  selectedChoice="";
  selectedValue(){
    console.log(this.selectedChoice);
    this.dataChange.emit(this.selectedChoice);
  }

  constructor() { }

  ngOnInit() {
  }

}

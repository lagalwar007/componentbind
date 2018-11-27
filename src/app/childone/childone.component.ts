import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent{
  public toggle:boolean = false;
  @Output() toggleEvent = new EventEmitter<boolean>();
  constructor() { }

  getToggle(){
    this.toggle = !this.toggle;
    this.toggleEvent.emit(this.toggle);
  }

}

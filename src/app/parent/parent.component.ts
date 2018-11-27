import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{

  constructor() { }
  public toggle:boolean;

  setToggle($event){
    console.log('parent ===>',$event);
    this.toggle = $event;
  }

}

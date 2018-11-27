import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit{
  public toggle:boolean = true;
  @Output() toggleEvent = new EventEmitter<boolean>();
  constructor() { }
  
  ngOnInit(){
   this.toggleEvent.emit(this.toggle); 
  }

  getToggle(){
    this.toggle = !this.toggle;
    this.toggleEvent.emit(this.toggle);
  }

}

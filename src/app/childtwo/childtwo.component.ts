import { Component, OnInit, Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent implements OnInit,OnChanges {
  @Input() toggleStatus:boolean;
  public toggle:boolean;
  constructor() { }
  ngOnInit() {
    
  }
  ngOnChanges(changes:SimpleChanges){
    for (let propName in changes) {  
      this.toggle = changes[propName].currentValue;
    }
  }
}

import { ChildtwoComponent } from './../childtwo/childtwo.component';
import { ChildoneComponent } from './../childone/childone.component';
import {  Component, 
          OnInit, 
          AfterViewInit, 
          AfterContentInit,
          ViewChild, 
          OnDestroy, 
          AfterContentChecked } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit,AfterContentInit,AfterContentChecked,OnDestroy{
  constructor() { }
  public toggle:boolean;
  @ViewChild(ChildoneComponent) checkbox: ChildoneComponent;
  @ViewChild(ChildtwoComponent) div: ChildtwoComponent;
  ngOnInit(){
    console.log('initialized')
  }
  ngAfterContentInit(){
    console.log('afterContentInit');
  }
  ngAfterContentChecked(){
    console.log('aftercontentChecked');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('afterViewChecked');
  }
  
  ngOnDestroy(){
    console.log('onDestroy');
  }
  setToggle($event){
    console.log('parent ===>',$event);
    this.toggle = $event;
  }

}

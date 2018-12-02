import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,AfterViewInit {

  @ViewChild('para', {read: ViewContainerRef}) p :ViewContainerRef
  @Input('data') data;
  constructor() { }
  ngOnInit() {
    
  }
  ngAfterViewInit(){

  }

}

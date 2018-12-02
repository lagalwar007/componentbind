import { Observable } from 'rxjs';
import { ChildtwoComponent } from './../childtwo/childtwo.component';
import { ChildoneComponent } from './../childone/childone.component';
import {  Component, 
          OnInit, 
          AfterViewInit, 
          ViewChild} from '@angular/core';
import { ListService } from './list.service';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit,AfterViewInit{
  constructor(private list:ListService,
              private local:LocalStorageService) { }

  public toggle:boolean;
  public searchval:string = 'a';

  @ViewChild(ChildoneComponent) checkbox: ChildoneComponent;
  @ViewChild(ChildtwoComponent) div: ChildtwoComponent;

  displayList;
  ngOnInit(){
    if(this.local.retrieve('post')){
      this.displayList = this.local.retrieve('post')  
    }else{
      this.list.getPost().subscribe(res => {
        if(res){
          this.local.store('post', res);
          this.displayList = res;
        }
      });
    }
  }
  identify(index,item){
    //console.log(item.title)
    return item.title;
  }

  ngAfterViewInit(){}
  setToggle($event){
    //console.log('parent ===>',$event);
    this.toggle = $event;
  }
}

import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  data='gayathri'
 value:any='2345'
@Input() primary:any;
@Input()secondary:any;
@Output() result= new EventEmitter
  constructor() { }

  ngOnInit(): void {
    console.log(this.primary,this.secondary)
  }
  addnumber(){
    let res = this.primary+this.secondary
    this.result.emit(res)
  }

}

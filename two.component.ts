import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
@Input()primary:any;
@Input()secondary:any;
@Output()result = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log(this.primary,this.secondary)
  }
  addnumbers(){
    let res = this.primary+this.secondary
    this.result.emit(res)
  }
}

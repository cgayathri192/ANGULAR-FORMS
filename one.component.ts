import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
firstvalue=30;
secondvalue=50;
result:any
  constructor() { }
  ShowParentResult(res:any){
    this.result=res;
    console.log(this.result)
  }

  ngOnInit(): void {
  }

}

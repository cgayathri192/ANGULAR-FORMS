import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
firstvalue=20;
secondvalue=40;
result:any;
  constructor() { }
  ShowParentResult(res:any){
      this.result = res;
      console.log(this.result)
  }

  ngOnInit(): void {
  }

}

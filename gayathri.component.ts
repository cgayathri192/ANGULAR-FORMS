import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-gayathri',
  templateUrl: './gayathri.component.html',
  styleUrls: ['./gayathri.component.scss']
})
export class GayathriComponent implements OnInit {
data:any;

  constructor(private ser:MainService) {
   this.gett()
   }

  ngOnInit(): void { 
  
  }
  
  gett(){
    this.data = this.ser.get().subscribe(x=>{
      this.data=x
    })
  }
}

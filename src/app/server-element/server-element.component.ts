import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') 
  element:{type:string, name:string, content:string}

  constructor() {

    console.log("Constructor Called");

   }

  ngOnInit(): void {

    console.log('ngOnit Called');
    
  }

  serverElements = [];
  newServerName = '';
  newServerContent = '';


}

import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  @Output()bluePrintCreated = new EventEmitter<{bluePrintName: string, bluePrintContent: string}>()
  
  serverElements = [];
  // newServerName = '';
  // newServerContent = '';
  


  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  



  
  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({serverName:nameInput.value,serverContent:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.serverCreated.emit({serverName:nameInput.value,serverContent:this.serverContentInput.nativeElement.value })
  }

}

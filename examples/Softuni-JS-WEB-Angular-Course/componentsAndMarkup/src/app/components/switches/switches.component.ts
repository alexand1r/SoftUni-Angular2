import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  @Output() fontChange = new EventEmitter<string>()
  @Output() fontColorSelect = new EventEmitter<string>()
  @Output() bgColorSelect = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  increaseFont(){
    this.fontChange.emit('inc')
  }
  
  decreaseFont(){
    this.fontChange.emit('dec')
  }

  backgroundSelected(ev){
    this.bgColorSelect.emit(ev.target.value)
  }

  fontSelected(ev){
    this.fontColorSelect.emit(ev.target.value)
  }

}

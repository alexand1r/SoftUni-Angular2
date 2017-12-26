import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Colors} from "./Colors";

@Component({
  selector: 'color-picker',
  templateUrl: './color.component.html',
  providers: [Colors],
})
export class ColorComponent implements OnInit{
  colors;

  constructor(private data: Colors) {}

  @Output() onChangeTC = new EventEmitter<number>();
  @Output() onChangeBgC = new EventEmitter<number>();

  changeTC(id: number) {
    this.onChangeTC.emit(id);
    console.log(id);
  }

  changeBgC(id: number) {
    this.onChangeBgC.emit(id);
    console.log(id);
  }

  ngOnInit(): void {
    this.colors = this.data.getData();
  }
}

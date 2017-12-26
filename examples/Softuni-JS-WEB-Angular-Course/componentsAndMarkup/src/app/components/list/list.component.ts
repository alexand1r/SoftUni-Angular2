import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../../interfaces/data'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() items: Data
  @Output() onSelected = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  handleLiClick(index: number){
    this.onSelected.emit(index)
  }

}

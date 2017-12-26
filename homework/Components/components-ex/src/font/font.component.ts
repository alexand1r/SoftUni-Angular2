import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'font-adjust',
  templateUrl: './font.component.html'
})
export class FontComponent {
  font: number = 12;
  @Output() onIncreaseFont = new EventEmitter<number>();
  @Output() onDecreaseFont = new EventEmitter<number>();

  inc() {
    this.onIncreaseFont.emit(this.font);
    this.font++;
  }

  dec() {
    this.onDecreaseFont.emit(this.font);
    this.font--;
  }
}

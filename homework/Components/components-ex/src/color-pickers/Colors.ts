import {Color} from "./Color";
import { Injectable } from '@angular/core';

@Injectable()
export class Colors{
  getData(): Array<Color> {
    return [
      {id: 1, name: 'Black', color: '#000000'},
      {id: 2, name: 'White', color: '#FFFFFF'},
      {id: 3, name: 'Red', color: '#FF0000'},
      {id: 4, name: 'Orange', color: '#FFCC00'},
      {id: 5, name: 'Yellow', color: '#FFFF00'},
      {id: 6, name: 'Green', color: '#00FF00'},
      {id: 7, name: 'Blue', color: '#0000FF'},
      {id: 8, name: 'Indigo', color: '#663366'},
      {id: 9, name: 'Violet', color: '#FF00FF'}
    ]
  }
}

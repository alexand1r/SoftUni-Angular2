import { Injectable } from '@angular/core';
import { Data } from '../interfaces/data'

@Injectable()
export class DataService {
  private data: Array<Data>;

  constructor() {
    this.data = [{
      title: 'test title 1',
      description: '1 test description test description test description test description test description test description test description test description test description test description test description test description  test description test description test description test description test description test description test description test description test description test description test description test description  test description test description test description test description test description test description test description test description test description test description test description test description 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
      author: 'Some author 1',
      image: 'https://codepo8.github.io/canvas-images-and-pixels/img/horse.png'
    }, {
      title: 'test title 2',
      description: '2 test description test description test description test description test description test description test description test description test description test description test description test description  test description test description test description test description test description test description test description test description test description test description test description test description  test description test description test description test description test description test description test description test description test description test description test description test description 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222',
      author: 'Some author 2',
      image: 'https://codepo8.github.io/canvas-images-and-pixels/img/horse.png'
    }, {
      title: 'test title 3',
      description: '3 test description test description test description test description test description test description test description test description test description test description test description test description  test description test description test description test description test description test description test description test description test description test description test description test description  test description test description test description test description test description test description test description test description test description test description test description test description 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333',
      author: 'Some author 3',
      image: 'https://codepo8.github.io/canvas-images-and-pixels/img/horse.png'
    }, {
      title: 'test title 4',
      description: '4 test description test description test description test description test description test description test description test description test description test description test description test description  test description test description test description test description test description test description test description test description test description test description test description test description  test description test description test description test description test description test description test description test description test description test description test description test description 444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444',
      author: 'Some author 4',
      image: 'https://codepo8.github.io/canvas-images-and-pixels/img/horse.png'
    }, {
      title: 'test title 5',
      description: '5 test description test description test description test description test description test description test description test description test description test description test description test description  test description test description test description test description test description test description test description test description test description test description test description test description  test description test description test description test description test description test description test description test description test description test description test description test description 555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555',
      author: 'Some author 5',
      image: 'https://codepo8.github.io/canvas-images-and-pixels/img/horse.png'
    }, {
      title: 'test title 6',
      description: '6 test description test description test description test description test description test description test description test description test description test description test description test description  test description test description test description test description test description test description test description test description test description test description test description test description  test description test description test description test description test description test description test description test description test description test description test description test description 666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666',
      author: 'Some author 6',
      image: 'https://codepo8.github.io/canvas-images-and-pixels/img/horse.png'
    }];
  }

  getData(): Promise<Array<Data>> {
    return Promise.resolve(this.data);
  }

}

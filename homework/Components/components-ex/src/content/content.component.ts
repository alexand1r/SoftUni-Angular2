import {Component, Input} from '@angular/core';
import {Article} from "../app/article";

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
})
export class ContentComponent {
  @Input() article: Article;
  @Input() font: number;
  showHide = true;
  showHideImg = true;
  increase: number = 250;
  increaseText() {
    this.increase += 250;
    if (this.increase >= this.article.description.length) {
      this.showHide = false;
    }
  }
  checkIfExist() {
    return (this.article.title != undefined);
  }
  showHideImage() {
    if (this.showHideImg) this.showHideImg = false;
    else this.showHideImg = true;
  }
}

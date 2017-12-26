import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Article} from "../app/article";

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
})
export class NavComponent{
  @Input() articles: Array<Article>;

  @Output() onClicked = new EventEmitter<Article>();
  article = {};

  getArticle(article: Article) {
    this.onClicked.emit(article);
    this.article = article;
  }
}

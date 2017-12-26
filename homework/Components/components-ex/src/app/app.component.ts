import {Component, OnInit, Input} from '@angular/core';
import {FakeData} from "./fakeData";
import {Article} from "./article";
import {Color} from "../color-pickers/Color";
import {Colors} from "../color-pickers/Colors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FakeData, Colors],

})
export class AppComponent implements OnInit {
  articles;
  article = {};
  font = 12;
  colors;
  color: Color;
  bgColor: Color;

  constructor(private data: FakeData, private dataC: Colors) {
  }

  ngOnInit(): void {
    this.articles = this.data.getData();
    this.colors = this.dataC.getData();
  }

  onClicked(article: Article) {
    this.article = article;
    console.log(this.article);
  }

  onTC(id: number) {
    this.color = this.colors[id];
    console.log(this.color);
  }

  onBgC(id: number) {
    this.bgColor = this.colors[id];
  }

  onClickedIFont() {
    this.font++;
  }

  onClickedDFont() {
    this.font--;
  }
}

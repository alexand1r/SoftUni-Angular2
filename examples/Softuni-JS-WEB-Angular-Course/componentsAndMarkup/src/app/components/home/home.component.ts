import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Data } from '../../interfaces/data'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listItems: Array<Data>;
  detailsItem: Data;
  fontSize: number = 1;
  bgColor: string = 'white';
  fontColor: string = 'black'
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().then(data => {
      this.listItems = data;
      this.detailsItem = data[0];
    })
  }

  handleItemSelect(index) {
    this.detailsItem = this.listItems[index];
  }

  handleFontChange(ev) {
    if (ev === 'inc' && this.fontSize < 4) {
      this.fontSize += 1;
    } else if (ev === 'dec' && this.fontSize > 1) {
      this.fontSize -= 1;
    }
  }

  handleFontColorSelect(ev) {
    this.fontColor = ev
  }

  handleBgColorSelect(ev) {
    this.bgColor = ev
  }

}

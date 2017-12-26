import { Component, OnChanges, Input } from '@angular/core';
import { Data } from '../../interfaces/data'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnChanges {

  @Input() detailsItem: Data;
  @Input() fontSize: number;
  @Input() fontColor: string;
  @Input() bgColor: string;
  shown: boolean = false;
  descriptionToShow: string;

  constructor() { }

  ngOnChanges() {
    this.descriptionToShow = this.detailsItem.description.substr(0, 250)
    this.shown = false
  }

  clickedBtn() {
    this.shown = !this.shown
    if (this.shown) {
      this.descriptionToShow = this.detailsItem.description;
    } else {
      this.descriptionToShow = this.detailsItem.description.substr(0, 250)
    }
  }


}

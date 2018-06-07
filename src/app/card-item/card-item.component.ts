import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../card.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  myLeft = 50;
  @Input() card: CardModel;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  setMyStyle() {
    const styles = {
      'max-height': '170px',
      'position': 'relative',
      'left': this.myLeft + this.index * 30 + 'px'
    };

    return styles;
  }
}

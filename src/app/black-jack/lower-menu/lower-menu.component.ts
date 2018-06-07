import {Component, OnInit} from '@angular/core';
import {CardsService} from '../../services/cards.service';

@Component({
  selector: 'app-lower-menu',
  templateUrl: './lower-menu.component.html',
  styleUrls: ['./lower-menu.component.css']
})
export class LowerMenuComponent implements OnInit {
  first = 'bet';
  hasCard = true;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
  }

  onBet() {
    this.first = 'addCard';
    this.cardsService.startGame();
    setTimeout(() => {
      this.onAddCard();
    }, 300);
    setTimeout(() => {
      this.onAddCard();
    }, 600);
  }

  onAddCard() {
    this.cardsService.addCard();
    if (this.cardsService.howManyCardsInDeckForEachGame > 0) {
      this.hasCard = true;
    } else {this.hasCard = false; }
  }

}

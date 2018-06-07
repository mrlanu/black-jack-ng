import {Component, OnInit} from '@angular/core';
import {CardsService} from '../services/cards.service';
import {Time} from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
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

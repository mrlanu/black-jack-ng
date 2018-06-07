import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardModel} from '../card.model';
import {CardsService} from '../services/cards.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-black-jack',
  templateUrl: './black-jack.component.html',
  styleUrls: ['./black-jack.component.css']
})
export class BlackJackComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  cardsOnTable: CardModel[] = [];

  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.subscription = this.cardsService.cardAdded.subscribe(
      (cards: CardModel[]) => {
        this.cardsOnTable = cards;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onReset() {
    this.cardsService.startGame();
  }
}

import {CardModel} from '../card.model';
import {Subject} from 'rxjs';

export class CardsService {
  howManyCardsInDeckForEachGame: number;
  cardAdded = new Subject<CardModel[]>();

  private deck: CardModel[] = [
    new CardModel('ace', 'diamond', 11, 'assets/img/cards/diamond/diamond_ace.png'),
    new CardModel('king', 'diamond', 10, 'assets/img/cards/diamond/diamond_king.png'),
    new CardModel('queen', 'heart', 10, 'assets/img/cards/heart/heart_queen.png'),
    new CardModel('eight', 'spade', 8, 'assets/img/cards/spade/spade_eight.png')
  ];

  deckForEachGame: CardModel[] = [];

  cardsOnTable: CardModel[] = [];

  addCard() {
    const random = Math.floor(Math.random() * this.deckForEachGame.length);
    this.cardsOnTable.push(this.deckForEachGame[random]);
    this.deckForEachGame.splice(random, 1);
    this.howManyCardsInDeckForEachGame = this.deckForEachGame.length;
    this.cardAdded.next(this.cardsOnTable);
  }

  startGame() {
    this.deckForEachGame = this.deck.slice();
    this.cardsOnTable = [];
    this.cardAdded.next(this.cardsOnTable);
    this.howManyCardsInDeckForEachGame = this.deckForEachGame.length;
  }
}

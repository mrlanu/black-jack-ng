import {CardModel} from '../card.model';

export class CardsService {
  private deck: CardModel[] = [
    new CardModel('ace', 'diamond', 11, 'assets/img/cards/diamond/diamond_ace.png'),
    new CardModel('king', 'diamond', 10, 'assets/img/cards/diamond/diamond_king.png'),
    new CardModel('queen', 'heart', 10, 'assets/img/cards/heart/heart_queen.png'),
    new CardModel('eight', 'spade', 8, 'assets/img/cards/spade/spade_eight.png')
  ];

  getDeck() {
    return this.deck.slice();
  }
}

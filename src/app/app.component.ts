import {Component, OnInit} from '@angular/core';
import {CardModel} from './card.model';
import {CardsService} from './services/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  summ = 0;
  deck: CardModel[];
  public cardsOnTable: CardModel[] = [];

  constructor(private cardsService: CardsService) {}


  ngOnInit() {
    this.deck = this.cardsService.getDeck();
  }

  onAddCard() {
    const random = Math.floor(Math.random() * this.deck.length);
    this.cardsOnTable.push(this.deck[random]);
    this.summ += this.deck[random].value;
    this.deck.splice(random, 1);
  }
}

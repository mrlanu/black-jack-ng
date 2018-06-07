import { Component, OnInit } from '@angular/core';
import {CardsService} from '../../services/cards.service';

@Component({
  selector: 'app-upper-menu',
  templateUrl: './upper-menu.component.html',
  styleUrls: ['./upper-menu.component.css']
})
export class UpperMenuComponent implements OnInit {

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
  }

  onReset() {
    this.cardsService.startGame();
  }

}

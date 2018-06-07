import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardItemComponent } from './black-jack/card-item/card-item.component';
import {CardsService} from './services/cards.service';
import { LowerMenuComponent } from './black-jack/lower-menu/lower-menu.component';
import { BlackJackComponent } from './black-jack/black-jack.component';
import { UpperMenuComponent } from './black-jack/upper-menu/upper-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent,
    LowerMenuComponent,
    BlackJackComponent,
    UpperMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

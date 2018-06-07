import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardItemComponent } from './black-jack/card-item/card-item.component';
import {CardsService} from './services/cards.service';
import { MenuBarComponent } from './black-jack/menu-bar/menu-bar.component';
import { BlackJackComponent } from './black-jack/black-jack.component';

@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent,
    MenuBarComponent,
    BlackJackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

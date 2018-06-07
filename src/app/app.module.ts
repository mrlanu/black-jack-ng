import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardItemComponent } from './card-item/card-item.component';
import {CardsService} from './services/cards.service';

@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

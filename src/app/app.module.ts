import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardItemComponent } from './card-item/card-item.component';
import {CardsService} from './services/cards.service';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

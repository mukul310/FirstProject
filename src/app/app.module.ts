import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AvatarComponent } from './header/avatar/avatar.component';
import { BoardComponent } from './board/board.component';
import { TilesComponent } from './board/tiles/tiles.component';
import { TileComponent } from './board/tiles/tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvatarComponent,
    BoardComponent,
    TilesComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

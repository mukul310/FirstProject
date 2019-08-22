import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { PlayerService } from '../header/avatar/player.service';
import { User } from '../user.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnDestroy {

  board:User[];
  tilesRowArray: number[];
  boardSub: Subscription;
  constructor( public playerService: PlayerService) { }

  ngOnInit() {
    this.tilesRowArray = Array.from(Array(10).keys()).map(i => i + 1).reverse();
    this.boardSub = this.playerService.currentPlayer.subscribe(users => {
      this.board = users;
    })
    this.board = [{name: 'Mukul', avatar: 'assets/img/first.jpg', position: 1, pawn: 'assets/img/blue.png'}];
    console.log(this.board);
  }

  ngOnDestroy(){
    this.boardSub.unsubscribe();
  }

}

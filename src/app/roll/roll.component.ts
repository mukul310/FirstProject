import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { PlayerService } from '../header/avatar/player.service';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.css']
})
export class RollComponent implements OnInit, OnDestroy {

  src:string = "assets/img/1.png";
  alt:string = "one";
  rolledNumber:number;
  rollSub:Subscription;

  constructor(public playerService:PlayerService) { }

  ngOnInit() {

  }

  ngOnDestroy(){
    this.rollSub.unsubscribe();
  }

  onRoll(){
    const rolledNumber = this.playerService.rollDice();
    this.src = `assets/img/${rolledNumber}.png`;
  }

}

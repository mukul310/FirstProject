import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit, OnChanges{

  src:string="assets/img/blue.png";
  alt="Mukul";

  isHidden:boolean = true;

  @Input() tileNumber:number;
  @Input() board:User[];
  constructor() { }

  ngOnInit() {

    this.board.forEach(user => {
      this.isHidden = user.position === this.tileNumber ? false : true;
      this.src = user.pawn;
    })

  }

  ngOnChanges() {

    this.board.forEach(user => {
      this.isHidden = user.position === this.tileNumber ? false : true;
      this.src = user.pawn;
    })
  }

}

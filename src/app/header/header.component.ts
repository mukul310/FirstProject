import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { PlayerService } from './avatar/player.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users: User[];

  constructor(public playerService: PlayerService) { }

  ngOnInit() {
    this.users = this.playerService.getPlayers();
  }

}

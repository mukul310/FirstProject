import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user.model';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() player: User;
  isActive:string;
  constructor( public playerService: PlayerService) { }

  ngOnInit() {

  }

}

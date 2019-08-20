import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() player: User;
  isActive:string = "Your turn";
  constructor() { }

  ngOnInit() {
    console.log(this.player)
  }

}

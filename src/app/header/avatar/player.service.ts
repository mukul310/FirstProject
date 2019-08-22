import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/user.model';
import { Subject } from 'rxjs';

@Injectable({providedIn:'root'})
export class PlayerService {

  // users:User[] = [{name: 'Mukul', avatar: 'assets/img/first.jpg'}, {name: 'Nikhil', avatar: 'assets/img/second.jpg'},
  //   {name: 'Jagrati', avatar: 'assets/img/third.jpg'},{name: 'Matt', avatar: 'assets/img/fourth.jpg'}];
users:User[] = [{name: 'Mukul', avatar: 'assets/img/first.jpg', position: 1, pawn: 'assets/img/blue.png'}];
  currentPlayer = new Subject<User[]>();
  rolledNumber:number;
  constructor() {}

  getPlayers(){
    return [...this.users];
  }

  getCurrentPlayer(){
    return this.users[this.getNextPlayerIndex()];

  }

  getNextPlayerIndex(){
    return 0;
  }



  rollDice(){
    this.rolledNumber = Math.floor(Math.random() * 6) + 1;
    let activePlayer = this.getCurrentPlayer();
    activePlayer.position+=this.rolledNumber;
    let users = this.users.map(user => {
      if(user.name === activePlayer.name){
        return activePlayer;
      }
      return user;
    })
    this.currentPlayer.next(users);
    return this.rolledNumber;
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = [{name: 'Mukul', avatar: 'assets/images/first.jpg'}, {name: 'Nikhil', avatar: 'assets/images/second.jpg'},
    {name: 'Jagrati', avatar: 'assets/images/third.jpg'},{name: 'Matt', avatar: 'assets/images/fourth.jpg'}];
  }

}

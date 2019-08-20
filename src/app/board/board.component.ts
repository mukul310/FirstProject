import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {


  tilesRowArray: number[];
  constructor() { }

  ngOnInit() {
    this.tilesRowArray = Array.from(Array(10).keys()).map(i => i + 1).reverse();
  }

}

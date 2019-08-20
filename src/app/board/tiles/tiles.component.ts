import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  @Input() row:number;
  tileArray: number[];
  constructor() { }

  ngOnInit() {

    this.tileArray = Array.from(Array(10).keys()).map(i => this.row % 2 === 0 ? (this.row * 10) - i : this.row * 10 - (9 - i));

  }

}

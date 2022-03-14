import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IGrid } from '../interfaces/models';

@Component({
  selector: 'my-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GridComponent implements OnInit {
  @Input() data: IGrid;

  constructor() {}

  ngOnInit() {}
}

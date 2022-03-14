import { Component, VERSION } from '@angular/core';
import { CellDataService } from './cell-data.service';
import { IGrid } from './interfaces/models';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  grid: IGrid;

  constructor(cellDataService: CellDataService) {
    this.grid = cellDataService.getGridState();
  }
}

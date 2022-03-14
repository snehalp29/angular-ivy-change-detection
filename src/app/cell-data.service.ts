import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { IGrid, ICell } from './interfaces/models';

@Injectable({ providedIn: 'root' })
export class CellDataService {
  readonly TOTAL: number = 500;

  private currentState: IGrid;

  constructor() {
    this.currentState = {
      cells: _.range(this.TOTAL).map((n) => {
        return <ICell>{
          id: n,
          flip: false,
          text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'[
            Math.floor(Math.random() * 36)
          ],
          changed: false,
        };
      }),
    };
  }

  getGridState(): IGrid {
    return this.currentState;
  }

  flipCell(id): void {
    let matchedCell: ICell = _.find(
      this.currentState.cells,
      (c) => c.id === id
    );
    if (matchedCell) {
      matchedCell.flip = !matchedCell.flip;
    }
  }

  resetChanged(): void {
    // To reset the 'changed' visualization
    _.each(this.currentState.cells, (c) => {
      c.changed = false;
    });
  }

  addCells(count: number): IGrid {
    return;
  }

  removeCells(count: number): IGrid {
    return;
  }
}

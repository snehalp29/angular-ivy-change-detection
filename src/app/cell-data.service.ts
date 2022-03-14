import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { IGrid, ICell } from './interfaces/models';

@Injectable()
export class CellDataService {
  readonly TOTAL: number = 500;

  private currentState: IGrid;

  constructor() {
    this.currentState = {
      cells: _.range(this.TOTAL).map((n) => {
        return <ICell>{
          id: n,
          flipped: false,
          text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'[
            Math.floor(Math.random() * 36)
          ],
          changed: false,
        };
      }),
    };
  }
}
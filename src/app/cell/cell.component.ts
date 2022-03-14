import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CellDataService } from '../cell-data.service';
import { ICell } from '../interfaces/models';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent
  implements OnInit, AfterViewChecked, DoCheck, OnChanges
{
  @Input() data: ICell;

  constructor(
    private cellDataService: CellDataService,
    private zone: NgZone,
    private el: ElementRef,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log('init');
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
}

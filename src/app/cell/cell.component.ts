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
  selector: 'my-cell',
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
    // throw new Error('Method not implemented.');
  }

  ngAfterViewChecked() {
    const elem = this.el.nativeElement.querySelectorAll('div.flipper')[0];
    if (!elem) {
      return;
    }

    // Trigger a highlight for visualization
    const highlightCSS = 'changed';
    elem.classList.add(highlightCSS);
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        elem.classList.remove(highlightCSS);
      }, 500);
    });
  }

  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
  }

  onClick(): void {
    console.log('onclick');
    this.cellDataService.flipCell(this.data.id);
  }
}

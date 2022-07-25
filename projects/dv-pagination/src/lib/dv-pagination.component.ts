import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import dvpaginate from './dv-paginate';


@Component({
  selector: 'apcoded-pagination',
  template: `<ul *ngIf="pager.pages && pager.pages.length" class="pagination">
  <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item first-item">
  <a (click)="setPage(1)" class="page-link">First</a>
  </li>
  <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item previous-item">
  <a (click)="setPage(pager.currentPage - 1)" class="page-link">Previous</a>
  </li>
  <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}" class="page-item number-item">
  <a (click)="setPage(page)" class="page-link">{{page}}</a>
  </li>
  <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item next-item">
  <a (click)="setPage(pager.currentPage + 1)" class="page-link">Next</a>
  </li>
  <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item last-item">
  <a (click)="setPage(pager.totalPages)" class="page-link">Last</a>
  </li>
  </ul>`,
  styles: [
  ]
})
export class DvPaginationComponent implements OnInit,OnChanges {

   @Input() items: Array<any>;
   @Output() changePage:any = new EventEmitter<any>(true);
   @Input() initialPage:any = 1;
   @Input() pageSize:any = 10;
   @Input() maxPages:any = 10;
   @Input() pager: any = {};

  constructor() {  
  }

  ngOnInit() {
        // set page if items array isn't empty
        if (this.items && this.items.length) {
          this.setPage(this.initialPage);
        }
      }

      ngOnChanges(changes: SimpleChanges) {
        // reset page if items array has changed 
       if (changes['items'].currentValue !== changes['items'].previousValue) {
          this.setPage(this.initialPage);
       }
      }

      setPage(page: number) {
        // get new pager object for specified page
        this.pager = dvpaginate(this.items.length, page, this.pageSize, this.maxPages);

        // get new page of items from items array
        var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);

        // call change page function in parent component
        this.changePage.emit(pageOfItems);
      }
      
    }

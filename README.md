# DvPagination

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

Angular Pagination Component

Usage instructions available at https://github.com/pateldharmendra123/dv-pagination/


in component ts file
<code>
  items:any = [];
  pageOfItems: Array<any>;

  constructor() { }

  ngOnInit() {
      // an example array of 150 items to be paged
      this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
      console.log(this.items);
  }

  onChangePage(pageOfItems:any) { 
      console.log(pageOfItems);
      // update current page of items
      this.pageOfItems = pageOfItems;
  }
</code>
  
  
  in HTML PAGe
  <code>  
  <div class="text-center">
      <div *ngFor="let item of pageOfItems">{{item.name}}</div>
  </div>
  <div class="text-center"> 
      <dv-pagination [items]="items" (changePage)="onChangePage($event)"></dv-pagination>  
  </div> 
    </code>

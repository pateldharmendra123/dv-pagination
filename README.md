# DvPagination

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

Angular Pagination Code

Usage instructions available at https://github.com/pateldharmendra123/dv-pagination/


------------------------------------------
  Add this code in component ts File
----------------------------------------- 

```TypeScript
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
```
-------------------------------------------
  Add this code in HTML Page
----------------------------------------- 

```HTML
 <div class="card-body">
      <div *ngFor="let item of pageOfItems">{{item.name}}</div>
  </div>
  <div class="card-footer pb-0 pt-3"> 
      <dv-pagination [items]="items" (changePage)="onChangePage($event)"></dv-pagination>  
  </div> 
```

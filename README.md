# DvPagination

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

Angular Pagination Component

Usage instructions available at https://github.com/pateldharmendra123/dv-pagination/

<h5>How to Used this package</h5>
-----------------------------------------------
Add code in component ts file
------------------------------------------------------

> items:any = [];
> pageOfItems: Array<any>;
> 
> constructor() { }
> 
> ngOnInit() {
>     
>      this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
>      console.log(this.items);
>  }
> 
>   onChangePage(pageOfItems:any) { 
>       console.log(pageOfItems);
>       
>       this.pageOfItems = pageOfItems;
>   }
  
  -------------------------------------------
  Add this code in HTML Page
  ----------------------------------------- 

<pre>

 *ngFor="let item of pageOfItems"
 {{item.name}}
 <dv-pagination 
 [items]="items" 
 (changePage)="onChangePage($event)"
 >
 </
 dv-pagination
 >  
</pre>
  

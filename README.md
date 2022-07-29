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
  
<div class="highlight highlight-source-ts notranslate position-relative overflow-auto"><pre><span class="pl-c">// app.module.ts</span>
<span class="pl-k">import</span> <span class="pl-kos">{</span><span class="pl-smi">NgModule</span><span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">'@angular/core'</span><span class="pl-kos">;</span>
<span class="pl-k">import</span> <span class="pl-kos">{</span><span class="pl-smi">BrowserModule</span><span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">'@angular/platform-browser'</span><span class="pl-kos">;</span>
<span class="pl-k">import</span> <span class="pl-kos">{</span><span class="pl-smi">NgxPaginationModule</span><span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">'ngx-pagination'</span><span class="pl-kos">;</span> <span class="pl-c">// &lt;-- import the module</span>
<span class="pl-k">import</span> <span class="pl-kos">{</span><span class="pl-smi">MyComponent</span><span class="pl-kos">}</span> <span class="pl-k">from</span> <span class="pl-s">'./my.component'</span><span class="pl-kos">;</span>

@<span class="pl-smi">NgModule</span><span class="pl-kos">(</span><span class="pl-kos">{</span>
    <span class="pl-c1">imports</span>: <span class="pl-kos">[</span><span class="pl-smi">BrowserModule</span><span class="pl-kos">,</span> <span class="pl-smi">NgxPaginationModule</span><span class="pl-kos">]</span><span class="pl-kos">,</span> <span class="pl-c">// &lt;-- include it in your app module</span>
    <span class="pl-c1">declarations</span>: <span class="pl-kos">[</span><span class="pl-smi">MyComponent</span><span class="pl-kos">]</span><span class="pl-kos">,</span>
    <span class="pl-c1">bootstrap</span>: <span class="pl-kos">[</span><span class="pl-smi">MyComponent</span><span class="pl-kos">]</span>
<span class="pl-kos">}</span><span class="pl-kos">)</span>
<span class="pl-k">export</span> <span class="pl-k">class</span> <span class="pl-smi">MyAppModule</span> <span class="pl-kos">{</span><span class="pl-kos">}</span></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="// app.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {MyComponent} from './my.component';

@NgModule({
    imports: [BrowserModule, NgxPaginationModule], // <-- include it in your app module
    declarations: [MyComponent],
    bootstrap: [MyComponent]
})
export class MyAppModule {}" tabindex="0" role="button" style="display: inherit;">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
    </clipboard-copy>
  </div></div>

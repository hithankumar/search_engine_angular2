import { Component } from '@angular/core';
import { ProductService } from './product/product.service';

@Component({
    selector: 'pm-app',
    template: `
<div>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">{{pageTitle}}</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a [routerLink]="['/welcome']">Home</a></li>
      <li><a [routerLink]="['/products']">Product List</a></li>
    </ul>
  </div>
</nav>
<div class="container">
    <router-outlet></router-outlet>
</div>
</div>`,
    providers: [ProductService] // registering service 
})
//interpolation is one way data binding
export class AppComponent{
    pageTitle: string= "Main Product List";
}
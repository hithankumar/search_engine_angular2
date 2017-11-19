import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import {HttpModule} from '@angular/http';
import {ProductDetailComponent} from './product/product-detail.component';
import {WelcomeComponent} from './home/welcome.component'
import {RouterModule} from '@angular/router';
import {ProductGuardService} from './product/product-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'product/:id', 
       canActivate: [ProductGuardService],
       component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo:'welcome', pathMatch: 'full'}
    ])
    ],//external components or angular components go here
  declarations: [ 
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
    ],//All our custom components used are added in here
    providers: [ProductGuardService],
  bootstrap: [ AppComponent ]//bootstraps the root application component.
})
export class AppModule { }

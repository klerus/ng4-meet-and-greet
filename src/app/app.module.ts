import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './product/item/item.component';
import { ListComponent } from './product/list/list.component';
import { ListFeaturedComponent } from './product/list-featured/list-featured.component';
import { ProductFilterComponent } from './product/product-filter/product-filter.component';
import {ProductsRepositoryService} from './products-repository.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    ListFeaturedComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

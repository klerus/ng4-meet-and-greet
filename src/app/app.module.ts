import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './product/item/item.component';
import { ListComponent } from './product/list/list.component';
import { ListFeaturedComponent } from './product/list-featured/list-featured.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    ListFeaturedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

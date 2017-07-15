import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductTileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

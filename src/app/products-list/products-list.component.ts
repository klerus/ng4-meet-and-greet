import { Component, OnInit, Inject, Input } from '@angular/core';
import { ProductService, ProductServiceToken, Product} from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products: Product[] = [];
  // @Input sorting
  // @Input filtering
  constructor(@Inject(ProductServiceToken) productsService: ProductService) {
    this.products = productsService.getProducts('', [], []);
  }

  ngOnInit() {}
}

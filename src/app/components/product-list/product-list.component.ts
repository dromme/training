import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;
  
  constructor() { }

  ngOnInit() {
  }

}

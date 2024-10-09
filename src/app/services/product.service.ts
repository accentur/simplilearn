import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  product: Product[] = [{

    id: 1,
    name: 'aaa',
    price: 10,
    description: 'aaaaa',
    inStock: true,
    imagePath:'images/111.png'
  },{
    id: 2,
    name: 'vvf',
    price: 10,
    description: 'dfds',
    inStock: true,
    imagePath:'images/222.png'
  }];


  getAllPorducts(): Product[]{
    
    return this.product;
  }

  constructor() {


   }
}

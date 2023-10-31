import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Product{
  id:number;
  title: string;
  price: number;
  subtitle: string;
  isbn13:number;
  image: string;
  url:string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() product : Product | undefined;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter();

  addToCart(product: Product){
    this.addProduct.emit(product);
    alert("Product added successfully!");
  }
}

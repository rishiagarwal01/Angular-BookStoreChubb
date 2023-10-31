import { Component, Output, EventEmitter, Input } from '@angular/core';

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
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})

export class CardItemComponent {
  @Input() item: Product | undefined;
  @Output() removeFromCart: EventEmitter<number> = new EventEmitter()

  removeProduct(id:number){
    this.removeFromCart.emit(id)
  }
}

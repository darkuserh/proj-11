import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
 items= this.cartService.getItems( );
constructor(
  private cartService:CartComponent
){}
}

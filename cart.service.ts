import { Injectable } from '@angular/core';
import { Product } from './products/products';
@Injectable({
  providedIn: 'root'
})
export class CartService {


    items:Product[]=[];
 addToCard(product:Product){
  this.items.push(product)

 }
 getItems(){
  return this.items
 }
 clearCart(){
  this.items
  return this.items
 }
}

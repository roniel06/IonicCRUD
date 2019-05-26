import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/shopping-item/Shopping-Item-interface';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {
  shoppingItem = {} as ShoppingItem
  itemRef: any
  itemdb: Observable<ShoppingItem>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.itemRef = this.database.list("shopping-item");
    this.itemdb = this.itemRef.valueChanges();
 
  }

  AddShoppingItem(shoppingItem: ShoppingItem) {

    this.itemRef.push(
      this.shoppingItem
      // {itemname:this.shoppingItem.itemname,
      // itemnumber:this.shoppingItem.itemnumber}
    );

    this.shoppingItem = {} as ShoppingItem

    this.navCtrl.pop();
  }

}

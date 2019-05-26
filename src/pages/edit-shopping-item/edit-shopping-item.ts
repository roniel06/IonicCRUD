import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AngularFireDatabase,AngularFireObject,} from "angularfire2/database"
import {  Subscription } from 'rxjs';
import { ShoppingItem } from '../../models/shopping-item/Shopping-Item-interface';


@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
itemRef: AngularFireObject<ShoppingItem>
item:any
itemSubscription: Subscription
constructor(public navCtrl: NavController, public navParams: NavParams, private database : AngularFireDatabase) {
    const itemId= this.navParams.get("itemId");


    this.itemRef =this.database.object(`shopping-item/${itemId}`)
    this.itemSubscription=this.item=this.itemRef.valueChanges().subscribe(item=> this.item = item)
  }


  editItem(shoppingItem:ShoppingItem){
    this.itemRef.update(shoppingItem);
    this.navCtrl.pop();
  }

 ionViewWillLeave(){
   this.itemSubscription.unsubscribe();
 }
}




import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { Observable } from "rxjs/Observable"
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ShoppingItem } from '../../models/shopping-item/Shopping-Item-interface';
import "rxjs/add/operator/map"
import { EditShoppingItemPage } from '../edit-shopping-item/edit-shopping-item';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listRef:AngularFireList<ShoppingItem>
  items:Observable<ShoppingItem[]>
  constructor(public navCtrl: NavController, private database: AngularFireDatabase,private actionSheetctrl:ActionSheetController) {
    this.listRef = this.database.list("shopping-item");
    this.items = this.listRef.snapshotChanges().map(changes => 
      changes.map(c => ({ $key: c.payload.key, ...c.payload.val() })))
 
  }


  async selectItem(shoppingItem:ShoppingItem){
    

    const ctrl=await this.actionSheetctrl.create({
      title: `${shoppingItem.itemname}`,
      buttons:[
        {
          text:"Edit",
          handler:()=>{
            //Show Edit Page, key as param
            this.navCtrl.push(EditShoppingItemPage,{itemId:shoppingItem.$key})
          }
        
        },
        {
          text:"Delete",
          role:"destructive",
          handler:()=>{

            //Condfirm Delete
            console.log(shoppingItem.$key)
            this.listRef.remove(shoppingItem.$key)
          }
        },
        {
          text:"Cancel",
          role:"cancel",
          handler:()=>{
            console.log("Cancel Pressed");
          }
        }

      ]
    })
    ctrl.present();
  }

  navAddShopping() {
    this.navCtrl.push(AddShoppingPage)
  }
}

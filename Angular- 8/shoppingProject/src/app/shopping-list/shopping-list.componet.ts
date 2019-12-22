import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
    selector:"app-shopping-list",
    templateUrl : "./shopping-list.componet.html",
    styleUrls : ["./shopping-list.componet.css"]
})
export class shoppingList{
    ingredients : Ingredients[]= [
        new Ingredients("Apple",10),
        new Ingredients("Banana",50)
    ]

}
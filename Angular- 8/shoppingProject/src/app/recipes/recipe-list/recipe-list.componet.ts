import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector:"app-recipe-list",
    templateUrl : "./recipe-list.componet.html",
    styleUrls:["./recipe-list.componet.css"]
})
export class recipeList{
    recipes : Recipe[] = [
        new Recipe("A Test Recipe","This is Simply a test","../../../assets/images/image1.jpg"),
        new Recipe("A Test Recipe","This is Simply a test","../../../assets/images/image1.jpg"),
        new Recipe("A Test Recipe","This is Simply a test","../../../assets/images/image1.jpg"),
        new Recipe("A Test Recipe","This is Simply a test","../../../assets/images/image1.jpg")
    ];
}
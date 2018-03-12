import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Carrot Cake', 'Good Cake', 'https://www.inspiredtaste.net/wp-content/uploads/2017/07/Carrot-Cake-Recipe-4-1200.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Recipe } from 'src/app/shared/types/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = []
  constructor(public route: ActivatedRoute, private recipeService: RecipeService) {
    this.route.data.subscribe(data => this.recipes = data['recipes'])
  }

  ngOnInit(): void {}

  public favoriteRecipe(recipeId: string) {
    console.log('favorite click', recipeId)
  }

}

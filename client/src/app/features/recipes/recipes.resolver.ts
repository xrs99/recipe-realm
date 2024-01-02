import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/shared/services/recipe.service';
@Injectable({
  providedIn: 'root',
})
export class RecipesResolver implements Resolve<any> {
  constructor(private recipeService: RecipeService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.recipeService.getRecipes();
  }
}
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../types/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return of([{name: 'test'}])
  }

}
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, map, of } from 'rxjs';
import { Recipe } from '../types/recipe';
import { SpinnerOverlayService } from '../components/spinner-overlay/spinner-overlay.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(private http: HttpClient, private spinner: SpinnerOverlayService) { }

  getRecipes(): Observable<Recipe[]> {
    const url = `http://localhost:3000/recipe`;
    this.spinner.show();

    return this.http.get(url).pipe(
      catchError(err => {
        this.spinner.hide();
        return err;
      }),
      finalize(() => this.spinner.hide()),
      map((response: any) => {
        console.log('response', response)
        return response;
      }),
    );
  }

  getFavoriteRecipesByUser(userId: string): Observable<any> {
    const url = `http://localhost:3000/favorite-recipe/${userId}`;
    this.spinner.show();

    return this.http.get(url).pipe(
      catchError(err => {
        this.spinner.hide();
        return err;
      }),
      finalize(() => this.spinner.hide()),
      map((response: any) => {
        console.log('response', response)
        return response;
      }),
    );
  }

  addFavoriteRecipe(userId: string, recipeId: string): Observable<any> {
    const url = `http://localhost:3000/favorite-recipe`;
    this.spinner.show();

    return this.http.post(url,{userId, recipeId}).pipe(
      catchError(err => {
        this.spinner.hide();
        return err;
      }),
      finalize(() => this.spinner.hide()),
      map((response: any) => {
        console.log('response', response)
        return response;
      }),
    );
  }
}
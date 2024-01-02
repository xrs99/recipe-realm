import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, map, of } from 'rxjs';
import { SpinnerOverlayService } from '../components/spinner-overlay/spinner-overlay.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {

  constructor(private http: HttpClient, private spinner: SpinnerOverlayService) { }

  getRecipeListsByUser(userId: string): Observable<any> {
    const url = `http://localhost:3000/recipe-list/${userId}`;
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

  createRecipeList(userId: string, name: string, recipeIds: string[]): Observable<any> {
    const url = `http://localhost:3000/recipe-list`;
    this.spinner.show();

    return this.http.post(url, {userId, name, recipeIds}).pipe(
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

  addRecipeToList(userId: string, recipeListId: string): Observable<any> {
    const url = `http://localhost:3000/recipe-list`;
    this.spinner.show();

    return this.http.put(url, {userId, recipeListId}).pipe(
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
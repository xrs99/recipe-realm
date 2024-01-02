import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './features/recipes/recipes.component';
import { RecipesResolver } from './features/recipes/recipes.resolver';
import { FavoritesComponent } from './features/favorites/favorites.component';
import { ListsComponent } from './features/lists/lists.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, resolve: { recipes: RecipesResolver } },
  { path: 'favorites', component: FavoritesComponent, resolve: { recipes: RecipesResolver } },
  { path: 'lists', component: ListsComponent, resolve: { recipes: RecipesResolver } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    MatGridListModule
  ]
})
export class RecipesModule { }

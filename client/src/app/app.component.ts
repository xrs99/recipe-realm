import { Component } from '@angular/core';
import axios, { AxiosRequestConfig, Method } from "axios";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';

  ngOnInt() {}

  getRecipies() {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
      params: {
        query: 'burger',
        diet: 'vegetarian',
        excludeIngredients: 'coconut',
        intolerances: 'egg, gluten',
        number: '10',
        offset: '0',
        type: 'main course'
      },
      headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': 'b872b2bf6amsh772d0cc14d46efbp1ac004jsn2ae7d003e319'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
}

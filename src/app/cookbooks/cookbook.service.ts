import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Cookbook } from './cookbook-item/cookbook';
import { Recipe } from '../cookbook-detail/recipe/recipe';

@Injectable()

export class CookbookService {

  private url = 'app/cookbooks';

  constructor(private http: Http) { }

  getCookbooks(): Promise<Cookbook[]> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json().data as Cookbook[])
               .catch(this.handleError);
  }

  getCookbook(id: number): Promise<Cookbook> {
    return this.getCookbooks()
               .then(cookbooks => cookbooks.find(cookbook => cookbook.id === id));
  }

  getRecipe(id: number): Promise<Recipe> {
    return this.getCookbooks()
                .then((cookbooks) => {
                  let recipe: Recipe;
                  cookbooks.forEach((book) => {
                    book.recipes.forEach((item) => {
                      if (item.id === id) {
                         recipe = item;
                      }
                    });
                  }); 

                  return recipe;
                });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}

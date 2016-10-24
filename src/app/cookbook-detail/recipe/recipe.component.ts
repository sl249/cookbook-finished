import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { CookbookService } from '../../cookbooks/cookbook.service';



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [CookbookService]
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;
  
  constructor(
    private route: ActivatedRoute,
    private cookbookService: CookbookService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.cookbookService.getRecipe(id)
        .then(recipe => this.recipe = recipe);
    });
  }

  goBack() {
    this.location.back();
  }

}

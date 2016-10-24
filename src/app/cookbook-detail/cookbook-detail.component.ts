import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CookbookService } from '../cookbooks/cookbook.service';
import { Cookbook } from '../cookbooks/cookbook-item/cookbook';
import { Recipe } from './recipe/recipe';


@Component({
  selector: 'app-cookbook-detail',
  templateUrl: './cookbook-detail.component.html',
  styleUrls: ['./cookbook-detail.component.css'],
  providers: [CookbookService]
})
export class CookbookDetailComponent implements OnInit {
  cookbook: Cookbook;

  constructor(
    private cookbookService: CookbookService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.cookbookService.getCookbook(id)
        .then(cookbook => this.cookbook = cookbook);
    });
  }

  openRecipe(recipe: Recipe) {
    this.router.navigate([`/cookbooks/${this.cookbook.id}/recipe`, recipe.id])
  }

  goBack() {
    this.location.back();
  }

}

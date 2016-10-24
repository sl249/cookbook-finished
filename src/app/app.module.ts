import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';

import { AppMessageComponent } from './shared/app-message/app-message.component';
import { CookbooksComponent } from './cookbooks/cookbooks.component';
import { CookbookItemComponent } from './cookbooks/cookbook-item/cookbook-item.component';
import { CookbookDetailComponent } from './cookbook-detail/cookbook-detail.component';
import { RecipeComponent } from './cookbook-detail/recipe/recipe.component';
import { AbstractPipePipe } from './cookbooks/abstract-pipe.pipe';
import { SearchBoxComponent } from './shared/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppMessageComponent,
    CookbooksComponent,
    CookbookItemComponent,
    CookbookDetailComponent,
    RecipeComponent,
    AbstractPipePipe,
    SearchBoxComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/cookbooks',
        pathMatch: 'full',
      },
      {
        path: 'cookbooks',
        children: [
          {
            path: '',
            component: CookbooksComponent
          },
          {
            path: ':id',
            children: [
              {
                path: '',
                component: CookbookDetailComponent
              },
              {
                path: 'recipe/:id',
                component: RecipeComponent
              }
            ]
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

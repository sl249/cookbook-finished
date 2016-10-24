import { Component, OnInit, Input } from '@angular/core';
import { Cookbook } from './cookbook';
import { Router } from '@angular/router';

@Component({
  selector: 'cookbook-item',
  templateUrl: './cookbook-item.component.html',
  styleUrls: ['./cookbook-item.component.css']
})
export class CookbookItemComponent implements OnInit {
  @Input() cookbook: Cookbook;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  viewCookbook() {
    this.router.navigate(['/cookbooks', this.cookbook.id]);
  }

}

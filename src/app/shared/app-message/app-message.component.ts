import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './app-message.component.html',
  styleUrls: ['./app-message.component.css']
})
export class AppMessageComponent implements OnInit {
  @Input() icon: string;
  @Input() iconClasses: string;
  @Input() message: string;
  @Input() messageClasses: string;

  constructor() { }

  ngOnInit() {
    this.iconClasses = this.iconClasses ? this.iconClasses : 'pink-text text-accent-2';
    this.icon = this.icon ? this.icon : 'sentiment_dissatisfied';
    this.message = this.message ? this.message : 'No Results';
    this.messageClasses = this.messageClasses ? this.messageClasses : 'pink-text text-accent-2'

  }

}

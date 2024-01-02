import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('recipeName') recipeName = '';
  @Input('recipeDescription') recipeDescription = '';

  @Output() public favorite = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  public handleClick(event: MouseEvent) {
    this.favorite.emit(event);
  }
}

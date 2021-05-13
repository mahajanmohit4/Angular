import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../books.model';
@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css'],
})
export class BookCollectionComponent implements OnInit {
  @Input() books: Array<Book>;
  @Output() remove = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

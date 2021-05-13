import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addBook, removeBook, retrievedBookList } from '../books.actions';
import { selectBookCollection, selectBooks } from '../books.selectors';
import { BooksService } from '../service/books.service';
@Component({
  selector: 'app-bbok',
  templateUrl: './bbok.component.html',
  styleUrls: ['./bbok.component.css'],
})
export class BbokComponent implements OnInit {
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(private booksService: BooksService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }
}

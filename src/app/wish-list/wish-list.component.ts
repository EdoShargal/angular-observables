import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  books: Book[] = [new Book(1, "edo")]
  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.book$.subscribe(
      result => {
        this.books.push(result)
      }
    )
  }



}

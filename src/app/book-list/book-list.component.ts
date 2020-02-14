import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = null

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.booksService.books$.subscribe(
      result => {
        this.books = result
      }
    )
  }

  addToWishList(id: number, name: string){
    console.log(id, name, "from addtowishlist")
    this.booksService.addToBookList(new Book(id,name))
  }

}

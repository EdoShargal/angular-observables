import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/Book.model';
import { Observable, Subject } from 'rxjs';


const URL: string = 'https://www.googleapis.com/books/v1/volumes?q='

@Injectable()
export class BooksService {

    private url: string = URL
    public books: Book[] = [new Book(1,"edo"), new Book(2,"shar")]

    private bookSrc = new Subject<Book>();
    book$ = this.bookSrc.asObservable()

    private booksSrc = new Subject<Book[]>();
    books$ = this.booksSrc.asObservable()

    
    constructor(private http: HttpClient){}

    getBooksBySearch(valueToSearch: string){
        return this.http.get(this.url + valueToSearch)
    }

    addList(books: Book[]){
        this.booksSrc.next(books)
    }
    addToBookList(book: Book){
        this.bookSrc.next(book)
    }

    // getBooks() : Observable<Book{
    //     return this.booksSrc.asObservable();
    // }
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { BooksService } from './services/books.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBookComponent,
    BookListComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

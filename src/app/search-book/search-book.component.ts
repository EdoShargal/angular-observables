import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }

  onSubmit(e: any){
    //get values from api with value to search
    // this.booksService.getBooksBySearch(e.target.search.value).subscribe(
    //   result => {
    //     console.log(result)
    //     this.books = result["items"]
    //   }
    // )
    this.booksService.getBooksBySearch(e.target.search.value).subscribe(res=>{
      this.booksService.addList(res["items"])
    })
    
      
        
    
  }

}

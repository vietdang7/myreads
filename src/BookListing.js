import React from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

class BookListing extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.ShelfCategories.map(cat => (
              <BookShelf
                key={cat.id}
                shelfTitle={cat.title}
                books={this.props.books.filter(book => book.shelf === cat.id)}
                changeShelf={this.props.changeShelf}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="open-search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default BookListing;

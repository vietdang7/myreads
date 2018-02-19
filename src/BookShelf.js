import React from "react";
import SingleBook from "./SingleBook";

class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={book.id}>
                <SingleBook book={book} changeShelf={this.props.changeShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;

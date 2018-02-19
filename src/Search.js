import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import SingleBook from "./SingleBook.js";
import sortBy from "sort-by";

class Search extends React.Component {
  state = {
    books: []
  };

  maxResults = 20;

  handleSearch(event) {
    if (event.target.value.trim() === "") {
      this.setState({ books: [] });
    } else {
      BooksAPI.search(event.target.value, this.maxResults).then(resBooks => {
        resBooks.error
          ? this.setState({ books: [] })
          : this.setState({
              books: resBooks.map(book => {
                const matchBooks = this.props.books.filter(
                  b => b.id === book.id
                );
                book.shelf =
                  matchBooks.length > 0 ? matchBooks[0].shelf : "none";
                return book;
              })
            });
      });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.handleSearch(e)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.sort(sortBy("title")).map(book => (
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

export default Search;

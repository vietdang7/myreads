import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
// Import for routing and link
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
// Import necessary components
import BookListing from "./BookListing";
import ShelfCategories from "./ShelfCategories";
import Search from "./Search";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  // get books from API
  getAPIBooks() {
    BooksAPI.getAll().then(apiBooks => {
      this.setState({ books: apiBooks });
      console.log(this.state.books);
    });
  }

  componentDidMount() {
    this.getAPIBooks();
  }

  handleChangeShelf = (book: any, shelf: string) => {
    BooksAPI.update(book, shelf).then(response => {
      this.getAPIBooks();
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookListing
              ShelfCategories={ShelfCategories}
              books={this.state.books}
              changeShelf={(b, s) => this.handleChangeShelf(b, s)}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <Search
              books={this.state.books}
              changeShelf={(b, s) => this.handleChangeShelf(b, s)}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

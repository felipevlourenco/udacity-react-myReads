import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  getCurrentState() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books
      });
    });
  }

  componentDidMount() {
    this.getCurrentState();
  }

  bookChangeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(book => {
      this.getCurrentState();
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
            <ListBooks
              books={this.state.books}
              onBookChangeShelf={this.bookChangeShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBooks
              history={history}
              books={this.state.books}
              onBookChangeShelf={this.bookChangeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    books: [],
    currently: {
      type: '',
      books: []
    },
    want: {
      type: '',
      books: []
    },
    read: {
      type: '',
      books: []
    }
  };

  getCurrentState() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books,
        currently: {
          shelf: 'currentlyReading',
          books: books.filter(book => book.shelf === 'currentlyReading')
        },
        want: {
          shelf: 'wantToRead',
          books: books.filter(book => book.shelf === 'wantToRead')
        },
        read: {
          shelf: 'read',
          books: books.filter(book => book.shelf === 'read')
        }
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
              currently={this.state.currently}
              want={this.state.want}
              read={this.state.read}
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

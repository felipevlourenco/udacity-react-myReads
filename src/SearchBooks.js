import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { Debounce } from 'react-throttle';

class SearchBooks extends Component {
  state = {
    search: '',
    books: []
  };

  searchBook(search) {
    this.setState({
      search: search
    });

    if (this.state.search.length > 0) {
      BooksAPI.search(this.state.search).then(books => {
        this.setState({
          books: books
        });
      });
    } else {
      this.setState({
        books: []
      });
    }
  }

  bookChange = (book, value) => {
    this.props.onBookChangeShelf(book, value);
  };

  render() {
    return (
      <div className="search-books">
        asdasdasd
        <div className="search-books-bar">
          <Link className="close-search" to="/" />
          <div className="search-books-input-wrapper">
            <Debounce time="400" handler="onChange">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.search}
                onChange={event => this.searchBook(event.target.value)}
              />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.length ? (
              this.state.books.map(book => (
                <li key={book.id}>
                  <Book book={book} onBookChange={this.bookChange} />
                </li>
              ))
            ) : (
              <li>No book found!</li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;

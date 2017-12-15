import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { Debounce } from 'react-throttle';

class SearchBooks extends Component {
  state = {
    search: '',
    books: [],
    isLoading: false
  };

  searchBook(search) {
    this.setState({
      search: search
    });

    if (this.state.search.length > 0) {
      this.setState({ isLoading: true });
      BooksAPI.search(this.state.search).then(books => {
        books.map(book => {
          let currentBook = this.props.books.find(b => b.id === book.id);

          if (currentBook !== undefined) {
            book.shelf = currentBook.shelf;
          }
          return book;
        });

        this.setState({
          books: books,
          isLoading: false
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
    this.props.history.push('/');
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
            ) : !this.state.isLoading ? (
              <li>No book found!</li>
            ) : (
              <div className="spinner">
                <div className="rect1" />
                <div className="rect2" />
                <div className="rect3" />
                <div className="rect4" />
                <div className="rect5" />
              </div>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;

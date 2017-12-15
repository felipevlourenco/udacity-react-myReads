import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class ListBooks extends Component {
  shelfChange = (book, value) => {
    this.props.onBookChangeShelf(book, value);
  };

  render() {
    const { books } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelf="currentlyReading"
              books={books.filter(book => book.shelf === 'currentlyReading')}
              onShelfChange={this.shelfChange}
            />
            <BookShelf
              shelf="wantToRead"
              books={books.filter(book => book.shelf === 'wantToRead')}
              onShelfChange={this.shelfChange}
            />
            <BookShelf
              shelf="read"
              books={books.filter(book => book.shelf === 'read')}
              onShelfChange={this.shelfChange}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="open-search">
            Add Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;

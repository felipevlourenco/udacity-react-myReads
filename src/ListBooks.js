import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const ListBooks = function(props) {
  const { books } = props;
  const shelfChange = (book, value) => {
    props.onBookChangeShelf(book, value);
  };

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
            onShelfChange={shelfChange}
          />
          <BookShelf
            shelf="wantToRead"
            books={books.filter(book => book.shelf === 'wantToRead')}
            onShelfChange={shelfChange}
          />
          <BookShelf
            shelf="read"
            books={books.filter(book => book.shelf === 'read')}
            onShelfChange={shelfChange}
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
};

export default ListBooks;

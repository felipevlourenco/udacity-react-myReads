import React from 'react';
import Book from './Book';

const BookShelf = function(props) {
  const bookChange = (book, value) => {
    props.onShelfChange(book, value);
  };

  const { shelf, books } = props;

  let shelfName = '';
  if (shelf === 'currentlyReading') {
    shelfName = 'Currently Reading';
  } else if (shelf === 'wantToRead') {
    shelfName = 'Want to Read';
  } else {
    shelfName = 'Read';
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book book={book} onBookChange={bookChange} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;

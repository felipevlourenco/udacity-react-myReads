import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {

  bookChange = (book, value) => {
    this.props.onShelfChange(book, value)
  }

  render() {
    const { shelf, books } = this.props

    let shelfName = ''
    if (shelf === 'currentlyReading') {
      shelfName = 'Currently Reading'
    } else if (shelf === 'wantToRead') {
      shelfName = 'Want to Read'
    } else {
      shelfName = 'Read'
    }

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book book={book} onBookChange={this.bookChange} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf

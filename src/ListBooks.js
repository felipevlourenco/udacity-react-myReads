import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import Book from './Book'

class ListBooks extends Component {

  render() {
    const { currently, want, read } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelf={currently.type} books={currently.books} />
            <BookShelf shelf={want.type} books={want.books} />
            <BookShelf shelf={read.type} books={read.books} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" className="open-search">
            Add Contact
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBooks

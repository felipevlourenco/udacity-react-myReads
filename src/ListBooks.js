import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class ListBooks extends Component {
  shelfChange = (book, value) => {
    this.props.onBookChangeShelf(book, value);
  };

  componentDidMount() {
    // setTimeout(() => {
    // console.log('ListBooks====================================');
    // console.log(this.props.books);
    // console.log('====================================ListBooks');
    // }, 2000);
  }

  componentDidUpdate() {
    console.log('ListBooks====================================');
    console.log(this.props.books);
    console.log('====================================ListBooks');
  }

  render() {
    const { books, currently, want, read } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelf={currently.shelf}
              books={currently.books}
              onShelfChange={this.shelfChange}
            />
            <BookShelf
              shelf={want.shelf}
              books={want.books}
              onShelfChange={this.shelfChange}
            />
            <BookShelf
              shelf={read.shelf}
              books={read.books}
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

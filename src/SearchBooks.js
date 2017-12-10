import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  state = {
    search: ''
  }

searchBook (search) {
  this.setState({
    search: search
  })
  BooksAPI.search(this.state.search)
    .then(books => {
      console.log(books);
    })
}

  render() {
    return  (
      <div className="search-books">asdasdasd
        <div className="search-books-bar">
          <Link className="close-search" to="/" />
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
                   value={this.search} onChange={event => this.searchBook(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks

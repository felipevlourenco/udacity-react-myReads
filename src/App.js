import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    // books: []
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
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({
          currently: {
            type: 'Currently Reading',
            books: books.filter(book => book.shelf === 'currentlyReading')
          },
          want: {
            type: 'Want to read',
            books: books.filter(book => book.shelf === 'wantToRead')
          },
          read: {
            type: 'Read',
            books: books.filter(book => book.shelf === 'read')
          }
        })
      })
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <ListBooks currently={this.state.currently}
                     want={this.state.want}
                     read={this.state.read} />
        )} />
        <Route path="/search" render={() => (
          <SearchBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp

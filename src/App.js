import React, { Component } from 'react';
import './App.css';
import Header from './header/header.js';
import BookList from './bookList/bookList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchTerm: '',
      printType: "All",
      bookType: null,
      error: null
    }
  }
  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=henry';
    const options = {
      method: 'GET',
      headers: {
      "Content-type": "application/json"
      }
    }
    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.')
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data.items);
        this.setState({
          books: data.items,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  
  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateBookType(option) {
    this.setState({
      bookType: option
    })
  }

  updatePrintType(option) {
    this.setState({
      printType: option
    })
  }
    render() {
      return (
        <main className='App'>
          <Header 
            searchTerm = {this.state.searchTerm}
            newSearch = {term => this.updateSearchTerm(term)}
            filter = {this.state.filter}
            printType = {this.state.printType}
            newBookType = {option => this.updateBookType(option)}
            newPrintType = {option => this.updatePrintType(option)}/>
          <div className="error-div"><p>{this.state.error}</p></div>
          <BookList 
            books = {this.state.books}/>
        </main>
      );
    }
}

export default App;
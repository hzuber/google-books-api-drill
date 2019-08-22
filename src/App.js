import React, { Component } from 'react';
import './App.css';
import Header from './header/header.js';
import BookList from './bookList/bookList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: null
    }

    this.updateBookList = this.updateBookList.bind(this);
  }
  
  updateBookList(data){
    console.log('this is the data ' + data);
    this.setState({
      books: data
    }, () => {
      console.log('books is updated');
    })
    console.log('update book list' + this.state.books)
  }

  render() {
    return (
      <main className='App'>
        <Header 
          updateList = {this.updateBookList}
          error = {this.props.error}/>
        <div className="error-div"><p>{this.state.error}</p></div>
        <BookList 
          books = {this.state.books}/>
      </main>
    );
  }
}

export default App;
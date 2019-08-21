import React, { Component } from 'react';
import './bookList.css';
import Books from '../books/books.js';

class BookList extends Component {
    render(){
        const books = this
            .props
            .books
            .map((book, i) => <Books { ...book } key = {i}/>);
    return(
        <div className="book-list">
            {books}
        </div>
    )}
}

BookList.defaultProps = {
    books: []
};

export default BookList;
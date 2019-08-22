import React, { Component } from 'react';
import './header.css';
import SearchBar from '../searchBar/searchBar';
import FilterBar from '../filterBar/filterBar';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            bookType: null,
            printType: 'all',
            error: null
        }
    }
         
    updateSearchTerm(term) {
        this.setState({
            searchTerm: term
        });
        console.log('updateSearchTerm, searchTerm = ' + this.state.searchTerm)
    }

    updateBookType(option) {
        this.setState({
        bookType: option
        });
    }

    updatePrintType(option) {
        this.setState({
        printType: option
        });
        this.submitSearch();
    }

    submitSearch() {
        const {bookType, searchTerm, printType} = this.state;
        const params = bookType ? {
                q : searchTerm,
                printType : printType,
                filter : bookType
            } : {
                q: searchTerm,
                printType : printType
            }

        const queryItems = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
        const url = 'https://www.googleapis.com/books/v1/volumes?'+ queryItems;
        console.log(url);
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
            error: null
            })
            this.props.updateList(data.items)
        })
        .catch(err => {
            this.setState({
            error: err.message
            });
        });
    }
    render() {

    return(
       <div className="header">
           <h1>Google Book Search</h1>
           <SearchBar 
                submitSearch = {(term) => this.submitSearch(term)}
                searchTerm = {this.props.searchTerm}
                updateSearchTerm = {(term) => this.updateSearchTerm(term)}/>
           <FilterBar 
                printType = {this.state.printType}
                filter = {this.state.filter}
                newBookType = {(value) => this.updateBookType(value)}
                newPrintType = {(value) => this.updatePrintType(value)}/>
       </div> 
    )}
}

export default Header;
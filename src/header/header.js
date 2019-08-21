import React, { Component } from 'react';
import './header.css';
import SearchBar from '../searchBar/searchBar';
import FilterBar from '../filterBar/filterBar';

class Header extends Component {
    render() {
    return(
       <div className="header">
           <h1>Google Book Search</h1>
           <SearchBar 
                searchTerm = {this.props.searchTerm}
                newSearch = {this.props.newSearch}/>
           <FilterBar 
                printType = {this.props.printType}
                filter = {this.props.filter}
                newBookType = {this.props.newBookType}
                newPrintType = {this.props.newPrintType}/>
       </div> 
    )}
}

export default Header;
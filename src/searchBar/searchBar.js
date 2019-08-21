import React, { Component } from 'react';
import './searchBar.css';

class SearchBar extends Component {
    render() {
    return (
        <div className="search-bar">
            <form onSubmit = {e => this.props.newSearch(e.target.value)}>
                <label htmlFor="search">Search:</label>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Enter Search Words"
                    defaultValue = {this.props.searchTerm}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )}
}

export default SearchBar;
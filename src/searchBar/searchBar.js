import React, { Component } from 'react';
import './searchBar.css';

class SearchBar extends Component {
    handleSubmit(e){
        e.preventDefault();
        this.props.submitSearch(e.target.value)
    }
    render() {
    return (
        <div className="search-bar">
            <form onSubmit = {e => {this.handleSubmit(e)}}>
                <label htmlFor="search">Search:</label>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Enter Search Words"
                    value={this.props.searchTerm}
                    onChange = {e => { this.props.updateSearchTerm(e.target.value)} }
                    />
                <button type="submit">Search</button>
            </form>
        </div>
    )}
}

export default SearchBar;
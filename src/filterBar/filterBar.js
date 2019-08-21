import React, { Component } from 'react';
import './filterBar.css';

class FilterBar extends Component {
    changeBookType(value) {
        if(value === "all") {
            this.props.newBookType(null);
        } else {
            this.props.newBookType(value);
        }
    }
    render() {
    return(
        <div className="filter-bar">
            <form>
                <label htmlFor="book-type">Book Type:</label>
                <select 
                    id="book-type" 
                    name="book-type"
                    onChange = {e => this.changeBookType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="free-ebooks">Free eBooks</option>
                    <option value="full">Full Text Available</option>
                </select>
                <label htmlFor="print-type">Print Type</label>
                <select 
                    id="print-type" 
                    name="print-type"
                    onChange = {e => this.props.newPrintType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
            </form>
        </div>
    )}
}

export default FilterBar;
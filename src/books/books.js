import React, {Component} from 'react';
import './books.css';

class Books extends Component  {
    static defaultProps = {
        saleInfo : {
            retailPrice : {
                amount : "Not For Sale",
                currencyCode : ""
            }
        },
        authors : ""
    }
    render() {
    return (
        <div className="book">
            <img 
                src={this.props.volumeInfo.imageLinks.thumbnail}
                alt="book cover"/>
            <div className="book-text-column">
                <h2>{this.props.volumeInfo.title}</h2>
                <p>{this.props.volumeInfo.authors}</p>
                <p>{this.props.saleInfo.retailPrice.amount} {this.props.saleInfo.retailPrice.currencyCode}</p>
                <p>{this.props.searchInfo.textSnippet}</p>
            </div>
        </div>
    )}
}

export default Books;
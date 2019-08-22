import React, {Component} from 'react';
import './books.css';

class Books extends Component  {
    render() {
        const price = this.props.saleInfo.saleability === 'FOR_SALE' ? this.props.saleInfo.listPrice.amount 
                        : this.props.saleInfo.saleability === 'FREE' ? 'Free' : 'NOT FOR SALE';
        const currency = this.props.saleInfo.saleability === 'FOR_SALE' ? this.props.saleInfo.listPrice.currencyCode : '';
        const snippet = this.props.searchInfo ? this.props.searchInfo.textSnippet : ""; 
    return (
        <div className="book">
            <img 
                src={this.props.volumeInfo.imageLinks.thumbnail}
                alt="book cover"/>
            <div className="book-text-column">
                <div className = "the-text">
                    <h2>{this.props.volumeInfo.title}</h2>
                    <p>{this.props.volumeInfo.authors}</p>
                    <p>{ price } {currency}</p>
                    <p>{ snippet }</p>
                </div>
            </div>
        </div>
    )}
}

export default Books;
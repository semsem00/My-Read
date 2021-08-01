
import React, {Component} from 'react';
import Book from './Book';

export default class Shelfs extends Component {
 
    render(){
        return(
          <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          
           { 
             
              this.props.books.map((book, key) => <Book  updateBooks ={this.props.updateBooks} book={book} key={key}/>)
           }
          </ol>
        </div>
      </div>

        )
    }
}
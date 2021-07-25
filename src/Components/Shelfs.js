
import React, {Component} from 'react';
import Book from './Book';

export default class Shelfs extends Component {
  // componentDidMount(){
  //   console.log(this)
  // }
  //upBooks ={this.props.updateBooks}
    render(){
        return(
          <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          
           { 
              // this.props.books && this.props.books.map(book =><Book key={book.id} {...book} />)
              this.props.books.map((book, key) => <Book  updateBooks ={this.props.updateBooks} book={book} key={key}/>)
           }
          </ol>
        </div>
      </div>

        )
    }
}
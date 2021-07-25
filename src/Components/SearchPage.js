
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';

export default class SearchButton extends Component {

  
  constructor(props){
    super(props);
    this.state={
        books:[],
        output:[],
        query:[]
    }
};

upQuery = (query) =>{
  this.setState({query:query}, this.submit);
};

submit(){
  if(this.state.query === undefined || this.state.query === ""){
     this.setState({output:[]})
  }
  BooksAPI.search(this.state.query.trim()).then(response => {
    console.log(response);
    if(response.error){
      this.setState({output:[]});
    }else{
   
    response.forEach(i => {
      let find = this.state.books.filter(bo =>bo.id === i.id);
      i.shelf = find[0] ? find.shelf : null;
     
    });
    this.setState({output: response});
    }
    
  })
}

 componentDidMount(){
   BooksAPI.getAll().then(response => {
     console.log(response);
     this.setState({books:response});
   });

   };

   updateBooks= (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(response =>{ 
      book.shelf = shelf ;
      this.setState(state=>({
        books : state.books.filter( B => B.id !== book.id).concat({book})
      }));
    });
   };


    render(){
        return(
 <div className="search-books">
 <div className="search-books-bar">
   <Link className="close-search" to='/'>Close</Link>
   <div className="search-books-input-wrapper">
    
     <input type="text" placeholder="Search by title or author" value={this.state.query}
     onChange={(event)=> {this.upQuery(event.target.value)} }/>

   </div>
 </div>
 <div className="search-books-results">
   <ol className="books-grid">
     {this.state.output.map((book, key)=> <Book  updateBooks ={this.updateBooks} book={book} key={key} />)}
   </ol>
 </div>
</div>
        )}
    }
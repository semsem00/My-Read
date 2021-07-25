
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Shelfs from './Shelfs'

export default class HomePage extends Component {

    constructor(props){
        super(props);
         
        this.state={
            books:[],
           
        }
       
    };

     componentDidMount(){
       BooksAPI.getAll().then(response => {
         console.log(response);
         this.setState({books:response});
       });

       };


      
       
       updateBooks=(book, shelf) => {
        BooksAPI.update(book, shelf)
        .then(response =>{ 
          book.shelf = shelf ;
          this.setState(state=>({
            books : state.books.filter( B => B.id !== book.id).concat([book])
          }));
        });
       };


    render(){
        return(
        <div className="list-books">
               <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelfs updateBooks ={this.updateBooks} title="Currently Reading" books={this.state.books.filter((book) => book.shelf ==="currentlyReading")} />;
              <Shelfs updateBooks ={this.updateBooks} title="Want to Read" books={this.state.books.filter((book) => book.shelf ==="wantToRead")} />;
              <Shelfs updateBooks ={this.updateBooks} title="Read" books={this.state.books.filter((book) => book.shelf ==="read")} />;
             
              
            </div>
            
            <Link className="open-search" to='/search'>Add a book </Link>
           
            </div>
         
        )
      }
    }
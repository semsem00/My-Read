import React from 'react';
// import * as BooksAPI from './BooksAPI'
// import * from './BooksAPI';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import HomePage from "./Components/HomePage";
import SearchPage from './Components/SearchPage';


class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">    
      <BrowserRouter>
          <Switch>
           <Route path='/search' component={SearchPage}/>
           <Route path='/home' component={HomePage}/>
           <Route path='/' component={HomePage}/>
          </Switch>   
      </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp

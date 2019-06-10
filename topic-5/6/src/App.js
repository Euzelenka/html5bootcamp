import React, { Component } from 'react';
import './App.css';
import Home from './components/MovieBoard.jsx';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
        <div className="container-fluid">
        <div className="row mt-3">
         <div className="col-lg-12">
          <div className="card">

            <div className="card-header">
              Movie Registry
            </div>
            
            <BrowserRouter>
              <Route exact path='/' component={Home}/>
            </BrowserRouter> 
            
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}


export default App;

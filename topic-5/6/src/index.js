import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import movieReducer from './reducers/movieReducer';
import Root from './components/Root.js';
const initialState = [{id:1,title:'Avatar',category:'Science Fiction',rating:5},
  {id:3,title:'Fast and Furious',category:'Suspense',rating:4},
  {id:4,title:'The Imitation Game',category:'Drama',rating:4},
  {id:5,title:'Toy Story',category:'Animation',rating:3}];
 
  if (localStorage.length === 0) {
    localStorage.setItem("movies", JSON.stringify(initialState));
    
  }

const store = createStore(movieReducer,initialState);


ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

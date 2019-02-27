//create some new component. this component should produce HTML

//take this components generated html and put it on the page (in the DOM)
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const API_KEY = "AIzaSyAYsUdlZGWe8rnCRKVHl-TXj19tAdQQB3k";

const App = ()=>{ //constant never going to change
  return (<div><SearchBar /></div>);
} 

ReactDOM.render(<App />, document.querySelector('.container'));
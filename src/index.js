//create some new component. this component should produce HTML

//take this components generated html and put it on the page (in the DOM)
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const App = ()=>{ //constant never going to change
  return (<div><SearchBar /></div>);
} 

ReactDOM.render(<App />, document.querySelector('.container'));


const API_KEY ="AIzaSyBd1LdIreiGycf4cOARvu-5Z86LOPGSwnI"
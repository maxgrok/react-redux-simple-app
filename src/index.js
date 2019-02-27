import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';

const API_KEY ="AIzaSyBd1LdIreiGycf4cOARvu-5Z86LOPGSwnI"

class App extends Component{
  constructor(props){
    super(props)
    this.state = { 
      videos: []
    }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos)=>{
      this.setState({ videos });
    })
  }

  render(){
    return (<div>
    <SearchBar />
    <VideoList videos={this.state.videos} />
    </div>);
  }
} 

export default App;

ReactDOM.render(<App />, document.querySelector('.container'));

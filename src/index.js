import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/VideoDetail';
import _ from lodash;

const API_KEY ="AIzaSyBd1LdIreiGycf4cOARvu-5Z86LOPGSwnI"

class App extends Component{
  constructor(props){
    super(props)
    this.state = { 
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos)=>{
      this.setState({ videos: videos, selectedVideo: videos[0] });
    })
  }

  render(){
    return (<div>
    <SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
    <VideoList onVideoSelect={(selectedVideo)=>{this.setState({selectedVideo})}} videos={this.state.videos} />
    <VideoDetail video={this.state.selectedVideo} />
    </div>);
  }
} 

export default App;

ReactDOM.render(<App />, document.querySelector('.container'));

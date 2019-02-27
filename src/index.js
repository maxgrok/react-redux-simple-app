import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/VideoDetail';
import {API_KEY} from './apis/youtube';

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
    const videoSearch = _.debounce((term) => {this.videoSearch(term), 300}); //search term only triggers search every 300 miliseconds

    return (<div>
    <SearchBar onSearchTermChange={videoSearch}/>
    <VideoList onVideoSelect={(selectedVideo)=>{this.setState({selectedVideo})}} videos={this.state.videos} />
    <VideoDetail video={this.state.selectedVideo} />
    </div>);
  }
} 

export default App;

ReactDOM.render(<App />, document.querySelector('.container'));

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


//most parent component fetches data
const API_KEY = 'AIzaSyC-u3fPQ7bhuu1MeMzL40PlFhXGMpZUgEU';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selectedVideo: null
    };

    YTSearch({key:API_KEY,term:'alan watts'}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
       });
    })

  }
  render() {
    return (
          <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
             videos={this.state.videos}
             onVideoSelect={selectedVideo => this.setState({selectedVideo})}

              />
          </div>
        )
  }
}



const container = document.getElementById('container');

ReactDOM.render( < App / > , container)

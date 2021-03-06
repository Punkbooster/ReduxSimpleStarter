// find library called React, installed as a depenency and assign it to variable React
import React, { Component } from 'react'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
// react dom is responsible to render react components to DOM (to html)
import ReactDOM from 'react-dom'

const API_KEY = 'AIzaSyCKwLpubG4AW39_tTEqFdtjACH1Ozvm0xg'

// Create a new component. This component should produce some HTML
// vanila js: const App = function() {
// always one component per file, no matter what
// example of function based component (component that has no state) we refactored to class component
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // because of the ES6 { videos: videos} can be leaved as just videos,
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          // also can be written as: (selectedVideo) => this.setState({selectedVideo})
          onVideoSelect={(video) => this.setState({selectedVideo: video})}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

// Take this component's genereated HTML and put it on the page (in the DOM)
// <App /> - Creates instance of app and passes it to the browser
// second argument to reactdom render should specify on which html target
// element this component should be pinned
// document.querySelector('container') - means, go find container div and
// render app component inside this div
ReactDOM.render(<App />, document.querySelector('.container'))

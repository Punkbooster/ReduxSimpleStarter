// find library called React, installed as a depenency and assign it to variable React
import React, { Component } from 'react'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
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

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // because of the ES6 { videos: videos} can be written like so:
      this.setState({ videos })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
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

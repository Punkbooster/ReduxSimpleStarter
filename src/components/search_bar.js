// that {component} is the same this as const Component = React.Component
import React, { Component } from 'react'

// this is called a function component, becaus it's literaly just a funcion
// function components should be used when you need a dump components (components without any logic, just a plain html)
// const SearchBar = () => {
//   return <input />
// }

// class based component, it's just a plain javascript object
// extends React.Component extends our searchBar class with react component methods
class SearchBar extends Component {

  // when component state change the whole class component rerenders and also forces all of it's children to rerender
  // wierd initialization of a state...
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}
        />
      </div>
    )
  }
}

export default SearchBar

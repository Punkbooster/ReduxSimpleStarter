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
  render() {
    return <input onChange={this.onInputChange} />
  }

  onInputChange(event) {
    console.log(event.target.value)
  }
}

export default SearchBar

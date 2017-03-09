// find library called React, installed as a depenency and assign it to variable React
import React from 'react';

// react dom is responsible to render react components to DOM (to html)
import ReactDOM from 'react-dom'

// Create a new component. This component should produce some HTML
// vanila js: const App = function() {
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's genereated HTML and put it on the page (in the DOM)
// <App /> - Creates instance of app and passes it to the browser
// second argument to reactdom render should specify on which html target
// element this component should be pinned
// document.querySelector('container') - means, go find container div and
// render app component inside this div
ReactDOM.render(<App />, document.querySelector('.container'));

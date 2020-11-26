import React, { Component } from 'react';
import '../css/App.css';
import Footer from './Footer.js'
import Nav from './Nav.js'
import Home from './Home.js'
import Portfolio from './Portfolio.js'
import Resume from './Resume.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      showContent: "home",
    }
  }

  updateState = (newState) => {
    this.setState({
      showContent: newState
    })
  }

  content = (props) => {
    if (props === "home") {
      return <Home />
    } else if (props === "portfolio") {
      return  <Portfolio />
    } else if (props === "resume") {
      return  <Resume />
    }
  }

  render() {
    return (
        <div id="app-container">
          <Nav 
            updateContent={this.updateState}
          />
          {this.content(this.state.showContent)}
          <Footer />
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import '../css/App.css';
// import Footer from './Footer.js'
import Header from './Header.js'
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
    if (this.state.showContent === "home") {
      return <Home />
    } else if (this.state.showContent === "portfolio") {
      return  <Portfolio />
    } else if (this.state.showContent === "resume") {
      return  <Resume />
    }
  }

  render() {
    return (
        <div id="app-container">
          <Header 
            updateContent={this.updateState}
          />
          {this.content(this.state.showContent)}
          {/* <Footer /> */}
        </div>
    );
  }
}

export default App;

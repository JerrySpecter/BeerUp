import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './assets/css/index.scss';

import Header from './containers/header';
import Main from './containers/main';
import Footer from './containers/footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { beer: [] }

    axios.get(`https://api.punkapi.com/v2/beers`)
    .then(res => {
      this.setState({ beer: res.data })
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Main beer={this.state.beer}/>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

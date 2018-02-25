import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './assets/css/index.scss';

import Header from './containers/header';
import Footer from './containers/footer';
import Sidebar from './containers/sidebar';
import BeerList from './containers/beer_list';

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
        <div className="row">
          <BeerList beer={this.state.beer} />
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

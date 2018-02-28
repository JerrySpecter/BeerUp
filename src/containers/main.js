import React, { Component } from 'react';
import Sidebar from './sidebar';
import BeerList from './beer_list';


class Main extends Component {
  render() {
    return (
      <div className="row">
        <BeerList beer={this.props.beer} />
        <Sidebar />
      </div>
    );
  }
}

export default Main;

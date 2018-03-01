import React, { Component } from 'react';
import Sidebar from './sidebar';
import BeerList from './beer_list';
import JoinUs from '../components/joinus/join_us';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" render={()=><BeerList beer={this.props.beer} />}/>
          <Route exact path="/favorites" render={()=><BeerList beer={this.props.beer} />}/>
          <Route exact path="/join-us" component={JoinUs} />
        </Switch>
      </div>
    );
  }
}

export default Main;

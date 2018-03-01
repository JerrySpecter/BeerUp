import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeroTitle from './hero_title';
import HeroText from './hero_text';
import HeroButton from './hero_button';


class HeroBanner extends Component {
  render() {
    const home =
                <div>
                  <HeroTitle title="BeerUp" />
                  <HeroText />
                  <HeroButton />
                </div>
    const favorites =  <HeroTitle title="Favorites" />;
    const join =  <HeroTitle title="Join Us" />;

    return (
      <div className="jumbotron">
        <Switch>
          <Route exact path="/" render={()=>home} />
          <Route exact path="/favorites" render={()=>favorites} />
          <Route exact path="/join-us" render={()=>join} />
        </Switch>
      </div>
    );
  }
}

export default HeroBanner;

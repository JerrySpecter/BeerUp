import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HeroTitle from './hero_title';
import HeroText from './hero_text';
import HeroButton from './hero_button';


class HeroBanner extends Component {
  render() {
    const home =  <div className="hero__wrapper">
                    <HeroText />
                    <HeroTitle title="Join our famous beerup!" />
                    <HeroButton />
                  </div>;
    const favorites = <div className="hero__wrapper">
                        <HeroTitle title="Favorites" />
                      </div>;
    const join =  <div className="hero__wrapper">
                    <HeroTitle title="Join Us" />
                  </div>;

    return (
      <div className="hero">
        <Switch>
          <Route exact path="/" render={()=>home} />
          <Route exact path="/favorites" render={()=>favorites} />
          <Route exact path="/join-us" render={()=>join} />
        </Switch>
        <div className="hero__illustration">
          <img src={require('../../assets/images/header/illustration.png')} alt="logo" />
        </div>
      </div>
    );
  }
}

export default HeroBanner;

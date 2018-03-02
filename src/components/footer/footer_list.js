import React, { Component } from 'react';
import FooterListItem from './footer_list_item';
import NavListItem from '../header/nav_list_item';

class FooterList extends Component {
  render() {
    return (
      <ul className="navbar-nav">
        <NavListItem title="Home" href="/" />
        <NavListItem title="Favorites" href="/favorites" />
        <NavListItem title="Join" href="/join-us" />
      </ul>
    );
  }
}

export default FooterList;

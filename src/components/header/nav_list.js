import React, { Component } from 'react';

import NavListItem from './nav_list_item';
import NavJoin from './nav_join';

class NavList extends Component {
  render() {
    return (
      <div className="navigation collapse" id="navbarNav">
        <ul className="navigation__list">
          <NavListItem title="Home" href="/" />
          <NavListItem title="Favorites" href="/favorites" />
          <NavJoin title="Join" href="/join-us" />
        </ul>
      </div>
    );
  }
}

export default NavList;

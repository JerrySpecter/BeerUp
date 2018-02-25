import React, { Component } from 'react';
import NavLogo from '../components/header/nav_logo';
import FooterList from '../components/footer/footer_list';
import FooterSocialList from '../components/footer/footer_social_list';

class Footer extends Component {
  render() {
    return (
      <footer>
        <NavLogo />
        <FooterList />
        <FooterSocialList />
      </footer>
    );
  }
}

export default Footer;

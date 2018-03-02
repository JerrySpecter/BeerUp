import React, { Component } from 'react';
import NavLogo from '../components/header/nav_logo';
import FooterList from '../components/footer/footer_list';
import FooterSocialList from '../components/footer/footer_social_list';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer__wrapper">
            <NavLogo />
            <FooterList />
            <FooterSocialList />
          </div>
          <span className="copyright">&copy; 2018 All rights reserved.</span>
        </div>
      </footer>
    );
  }
}

export default Footer;

import React, { Component } from 'react';

class FooterSocialListItem extends Component {
  render() {
    return (
      <ul className="social-list">
        <li className="social-list__icon">
          <a href="/"><i className="fab fa-facebook-f"></i></a>
        </li>
        <li className="social-list__icon">
          <a href="/"><i className="fab fa-twitter"></i></a>
        </li>
        <li className="social-list__icon">
          <a href="/"><i className="fab fa-linkedin-in"></i></a>
        </li>
        <li className="social-list__icon">
          <a href="/"><i className="fab fa-pinterest-p"></i></a>
        </li>
      </ul>
    );
  }
}

export default FooterSocialListItem;

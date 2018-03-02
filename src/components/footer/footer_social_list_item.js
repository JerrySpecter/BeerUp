import React, { Component } from 'react';

class FooterSocialListItem extends Component {
  render() {
    return (
      <ul className="social-list">
        <li className="social-list__icon">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
        </li>
        <li className="social-list__icon">
          <a href="#"><i class="fab fa-twitter"></i></a>
        </li>
        <li className="social-list__icon">
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </li>
        <li className="social-list__icon">
          <a href="#"><i class="fab fa-pinterest-p"></i></a>
        </li>
      </ul>
    );
  }
}

export default FooterSocialListItem;

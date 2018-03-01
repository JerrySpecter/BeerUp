import React, { Component } from 'react';

class ModalHeader extends Component {
  render() {
    return (
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <img src={require('../../../assets/images/beer-list/Close-icon.png')} alt="close" />
          </span>
        </button>
      </div>
    )
  }
}

export default ModalHeader;

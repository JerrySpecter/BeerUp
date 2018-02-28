import React, { Component } from 'react';
import ModalHeader from './beerlistmodal/modal_header';
import ModalBody from './beerlistmodal/modal_body';

class BeerListModal extends Component {
  render () {
    return (
      <div className="modal fade" id={'modal' + this.props.beer.id} tabIndex="-1" role="dialog" aria-labelledby={this.props.beer.id} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <ModalHeader />
            <ModalBody beer={this.props.beer}/>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerListModal;

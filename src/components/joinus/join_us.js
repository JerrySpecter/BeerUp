import React, { Component } from 'react';
import InputField from './input_field';
import Radio from './radio';
import Textarea from './textarea';
import Checkbox from './checkbox';
import Button from './button';
import $ from 'jquery';

class JoinUs extends Component {
  componentDidMount() {
    var $submit = $('[type="submit"]');
    $('#radio1').attr('checked', true);

    $submit.on('click', function(e) {
      e.preventDefault();
      $( ".alert" ).remove();
      // 2 different urls to simulate 2 different responses
      var url = 'https://reqres.in/api/users';

      if($(this).hasClass('error')) {
        var url = 'https://reqres';
      }

      var name = $('#full-name').val();
      var email = $('#email').val();
      var number = $('#phone-number').val();
      var textarea = $('#textarea').val();
      var rsvp = '';
      var letMeKnow = '';
      var remindMe = '';

      if($('#radio1').prop('checked')) {
        rsvp = $('#radio1').val();
      }
      if($('#radio2').prop('checked')) {
        rsvp = $('#radio2').val();
      }
      if($('#radio3').prop('checked')) {
        rsvp = $('#radio3').val();
      }
      if($('#checkbox1').prop('checked')) {
        letMeKnow = $('#checkbox1').val();
      }
      if($('#checkbox2').prop('checked')) {
        remindMe = $('#checkbox2').val();
      }

      $.ajax({
        url: url,
        type: "POST",
        data: {
          name: name,
          email: email,
          number: number,
          textarea: textarea,
          letMeKnow: letMeKnow,
          remindMe: remindMe,
          rsvp: rsvp
        },
        success: function(response){
          $('.form__wrapper').prepend('<div class="alert alert-success" role="alert">This is a success alert—check it out!</div>');
          console.log(response);
        },
        error: function(response){
          $('.form__wrapper').prepend('<div class="alert alert-danger" role="alert">This is a danger alert—check it out!</div>');
          console.log(response);
        }
      });
    });
  }

  render() {
    return (
        <div className="col-md-10 col-lg-6 offset-md-1 offset-lg-3">
          <div className="form__wrapper">
            <h2 className="beer-list__title">Quick, join up before we drink all the beer!</h2>
            <form className="form">
              <div className="form__section">
                <h3 className="form__section-title">Personal information</h3>
                <InputField type="text" placeholder="Full name" id="full-name"/>
              </div>

              <hr />
              <div className="form__section">
                <h3 className="form__section-title">Contact information</h3>
                <InputField type="text" placeholder="Email" id="email"/>
                <InputField type="text" placeholder="Phone Number" id="phone-number"/>
              </div>

              <hr />
              <div className="form__section">
                <h3 className="form__section-title">RSVP</h3>
                <Radio type="radio" id="radio1" name="radio" label="I'm coming!" />
                <Radio type="radio" id="radio2" name="radio" label="Maybe?" />
                <Radio type="radio" id="radio3" name="radio" label="Can't make it" />
                <Textarea id="textarea" rows="3" placeholder="Something you'd like to add?"/>
              </div>

              <hr />
              <div className="form__section">
                <Checkbox type="checkbox" id="checkbox1" label="Let me know about future beerups!" />
                <Checkbox type="checkbox" id="checkbox2" label="Remind me one day before this beerup!" />
              </div>
              <div className="form__submit-section">
                <Button type="submit" className="btn btn--primary error" label="Submit Error" />
                <Button type="submit" className="btn btn--primary success" label="Submit Success" />
              </div>
            </form>
          </div>
        </div>
    );
  }
}

export default JoinUs;

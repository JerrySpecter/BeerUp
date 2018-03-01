import React, { Component } from 'react';
import InputField from './input_field';
import Radio from './radio';
import Textarea from './textarea';
import Checkbox from './checkbox';
import Button from './button';

class JoinUs extends Component {
  render() {
    return (
        <div className="col-6 offset-3">
          <form className="">
            <h3>Personal information</h3>
            <InputField type="text" placeholder="Full name" id="full-name"/>

            <hr />

            <h3>Contact information</h3>
            <InputField type="email" placeholder="Email" id="email"/>
            <InputField type="text" placeholder="Phone Number" id="phone-number"/>

            <hr />

            <h3>RSVP</h3>
            <Radio type="radio" id="radio1" name="radio" label="I'm coming!" />
            <Radio type="radio" id="radio2" name="radio" label="Maybe?" />
            <Radio type="radio" id="radio3" name="radio" label="Can't make it" />
            <Textarea id="textarea" rows="3" placeholder="Something you'd like to add?"/>

            <hr />

            <Checkbox type="checkbox" id="checkbox1" label="Let me know about future beerups!" />
            <Checkbox type="checkbox" id="checkbox2" label="Remind me one day before this beerup!" />

            <Button type="submit" label="Submit" />
          </form>
        </div>
    );
  }
}

export default JoinUs;

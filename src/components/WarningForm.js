import React from 'react';

import { Button, Form, FormControl, ControlLabel, FormGroup, Glyphicon } from 'react-bootstrap';

import './WarningForm.css';


class WarningForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 'choose'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    switch (this.state.value) {
      case 'live':
        alert('Live missile warning sent!');
        break;
      case 'test':
        alert('Test alert. Carry on, nothing to see here.');
        break;
    }
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="missile-radios">
        <FormGroup>
          <FormControl type="radio" placeholder="Jane Doe" id="test" name="missileOptions" />
          <ControlLabel htmlFor="test" className="label-test"><span className="big">Test</span><span>Missile Warning</span></ControlLabel>
        </FormGroup>
        <FormGroup>
          <FormControl type="radio" placeholder="Jane Doe" id="live" name="missileOptions" />
          <ControlLabel htmlFor="live" className="label-live"><span className="big">Live</span><span>Missile Warning</span></ControlLabel>
        </FormGroup>
        <div className="submit-wrapper">
          <Button
            type="submit"
            bsStyle="success"
            bsSize="large"
          >
            Go <Glyphicon glyph="send" aria-hidden="true" />
          </Button>
        </div>
      </Form>
    );
  }

}

export default WarningForm;

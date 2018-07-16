import React from 'react';

import { Button, Form, FormControl, ControlLabel, FormGroup, Glyphicon } from 'react-bootstrap';

import './WarningForm.css';


class WarningForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.error = false;

    this.handleOptionChange = this.handleOptionChange.bind(this);
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
      default:
        this.defaultError();
    }
    event.preventDefault();
  }

  handleOptionChange(event) {
    this.setState({value: event.target.value});
    this.setState({error: false});
  }

  defaultError() {
    this.setState({error: true});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="missile-radios">
        <FormGroup>
          <FormControl 
            type="radio"
            id="test" 
            name="missileOptions"
            onChange={this.handleOptionChange}
            value="test" />
          <ControlLabel 
            htmlFor="test" 
            className="label-test">
            <span className="big">Test</span>
            <span>Missile Warning</span>
          </ControlLabel>
        </FormGroup>
        <FormGroup>
          <FormControl 
            type="radio" 
            id="live" 
            name="missileOptions"
            onChange={this.handleOptionChange}
            value="live" />
          <ControlLabel 
            htmlFor="live" 
            className="label-live">
            <span className="big">Live</span>
            <span>Missile Warning</span>
          </ControlLabel>
        </FormGroup>
        {
          this.state.value === 'live' &&
          <p className="submit-warning warn" role="alert">
          Warning: You have selected a <b>LIVE</b> missile warning. Please make sure you're sure!
          </p>
        }
        {
          this.state.value === '' && this.state.error === true &&
          <p className="default-error warn" role="alert">
            <Glyphicon glyph="warning-sign" aria-hidden="true" />Hi! I think you forgot something. Please pick whether to start a test or live missile warning session.
          </p>
        }
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

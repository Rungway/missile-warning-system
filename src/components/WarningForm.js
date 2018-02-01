import React from 'react';

import { Button, Form, FormControl, FormGroup, Glyphicon } from 'react-bootstrap';


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
      <Form onSubmit={this.handleSubmit}>
        <FormGroup bsSize="large">
          <FormControl
            componentClass="select"
            onChange={this.handleChange}
            value={this.state.value}
          >
            <option value="choose">Choose a warning...</option>
            <option value="test">Test Missile Warning</option>
            <option value="live">Live Missile Warning</option>
          </FormControl>
        </FormGroup>
        <Button
          type="submit"
          bsStyle="success"
          bsSize="large"
        >
          Go <Glyphicon glyph="send" />
        </Button>
      </Form>
    );
  }

}

export default WarningForm;

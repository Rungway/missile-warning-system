import React from 'react';
import { Button, Col, Form, FormControl, FormGroup, Glyphicon } from 'react-bootstrap';

class WarningForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 'choose'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.createNewWarning();
  }

  handleChange(event) {
    this.setState({value: event.target.value}, ()=>{
      // For live and custom alerts skip the need to click Go button
      // as these options present user prompts
      if (this.state.value==='live' || this.state.value==='custom'){
        this.createNewWarning();
      }
    });
  }

  createNewWarning(){
    if (this.state.value === 'choose') return;

    let warning = {id: Date.now(), type: this.state.value};

    switch (this.state.value){
      case 'live':
        warning.message = 'Live missile warning sent!';
        break;
      case 'test':
        warning.message = 'Test alert. Carry on, nothing to see here.';
        break;
      case 'nutella':
        warning.message = 'Flash Sale! 75% off Nutella. Yum!';
        break;
      case 'hoodie':
        warning.message = 'New season Rungway hoodie released!';
        break;
      case 'custom':
        warning.message = prompt('Inform the lucky Rungway residents of...');
        if (warning.message === null) return;
        break;
      default:
        return;
    }

    this.props.onSubmitWarning(warning);
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
            <option value="nutella">Nutella Sale</option>
            <option value="hoodie">New Rungway Hoodie</option>
            <option value="custom">Custom Promotion...</option>
          </FormControl>
        </FormGroup>
        <Col className='text-center'>
          <Button
            type="submit"
            bsStyle="success"
            bsSize="large"
          >
            Go <Glyphicon glyph="send" />
          </Button>
        </Col>
      </Form>
    );
  }

}

export default WarningForm;

import React from 'react';

import { Button, Form, FormControl, ControlLabel, FormGroup, Glyphicon, Well } from 'react-bootstrap';

import './WarningForm.css';

class WarningForm extends React.Component {
  render() {

    const {
      data,
      handleOptionChange,
      handleSubmit,
      toggleState,
      doLive,
      indexReset
    } = this.props;

    const num = this.props.index;

    const optionChange = (event) => {
      handleOptionChange(event, num)
    }

    const submit = (event) => {
      handleSubmit(event, num)
    }

    const toggle = () => {
      toggleState(num);
    }

    const goLive = () => {
      doLive(num)
    }

    const checkActive = () => {
      if (data.active.test) {
        return "Test"
      } else if (data.active.live) {
        return "Live"
      } else {
        return
      }
    }

    const reset = () => {
      indexReset(num);
    }

    return (
      <div className="warning-workflow">
        <h2>{data.type} {data.emoji}</h2>
        {
          (data.active.live || data.active.test) &&
          <Well bsSize="large" className={checkActive().toLowerCase()}>
            <p className="running-text">You are currently running a {data.type} <b>{checkActive()}</b> sequence.</p>
            <Button
              type="button"
              bsStyle="primary"
              bsSize="large"
              onClick={reset}>
              Click here to cancel the {data.type} {checkActive()} sequence.
            </Button>
          </Well>
        }
        {
          !data.active.live && !data.active.test &&
          <Form onSubmit={(event) => submit(event)} className="warning-radios">
            <FormGroup>
              <FormControl 
                type="radio"
                id={`test-${num}`} 
                name={`options-${num}`}
                onChange={(event) => optionChange(event)}
                value="test"
                checked={data.value === "test"} />
              <ControlLabel 
                htmlFor={`test-${num}`}  
                className="label-test">
                <span className="big">Test</span>
                <span>{data.type} Alert</span>
                <span>{data.emoji}</span>
              </ControlLabel>
            </FormGroup>
            <FormGroup>
              <FormControl 
                type="radio" 
                id={`live-${num}`}  
                name={`options-${num}`}
                onChange={(event) => optionChange(event)}
                value="live"
                checked={data.value === "live"} />
              <ControlLabel 
                htmlFor={`live-${num}`}  
                className="label-live">
                <span className="big">Live</span>
                <span>{data.type} Alert</span>
                <span>{data.emoji}</span>
              </ControlLabel>
            </FormGroup>
            {
              data.value === 'live' &&
              <p className="submit-warning warn" role="alert">
              <Glyphicon glyph="bullhorn" aria-hidden="true" />Attention! You have selected a <b>LIVE</b> {data.type} Alert. Please make sure you're sure!
              </p>
            }
            {
              data.value === '' && data.error === true &&
              <p className="default-error warn" role="alert">
                <Glyphicon glyph="warning-sign" aria-hidden="true" />Hi! I think you forgot something. Please pick whether to start a test or live session.
              </p>
            }
            <div className="submit-wrapper">
            {
              data.stage === 1 &&
              <Button
              type="submit"
              bsStyle="success"
              bsSize="large"
              >
                Go <Glyphicon glyph="send" aria-hidden="true" />
              </Button>
            }
            {
              data.stage === 2 &&
              <div className="follow-up">   
                <p>Are you one-hundo-p, absolutely, positively, super-dee-duperty sure?</p>      
                <Button
                type="button"
                bsStyle="link"
                onClick={toggle}
                >
                No, take me back!
                </Button>  
                <Button
                type="button"
                bsStyle="danger"
                onClick={goLive}
                >
                  <Glyphicon glyph="weather-warning" aria-hidden="true" /> Yes, it's an emergency!
                </Button>
              </div> 
            }

            </div>
          </Form>
        }
      </div>
    );
  }

}

export default WarningForm;

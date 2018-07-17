import React, { Component } from 'react';
import uuid from 'uuid';

import { Col, Grid, Row, PageHeader } from 'react-bootstrap';

import WarningForm from './WarningForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          type: "Missile",
          value: '',
          error: false,
          stage: 1,
          active: {
            test: false,
            live: false
          }
        },
        {
          type: "Nutella Sales",
          value: '',
          error: false,
          stage: 1,
          active: {
            test: false,
            live: false
          }
        },
        {
          type: "Unicorn Sightings",
          value: '',
          error: false,
          stage: 1,
          active: {
            test: false,
            live: false
          }
        }
      ]
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleStage = this.toggleStage.bind(this);
    this.doLive = this.doLive.bind(this);
    this.doTest = this.doTest.bind(this);
    this.indexReset = this.indexReset.bind(this);
  }


  handleSubmit(event, index) {
    event.preventDefault();
    switch (this.state.data[index].value) {
      case 'live':
        this.toggleStage(index);
        break;
      case 'test':
        this.doTest(index);
        break;
      default:
        this.defaultError(index);
    }
  }

  handleOptionChange(event, index) {
    const data = JSON.parse(JSON.stringify(this.state.data));
    data[index].value = event.target.value;
    data[index].error = false;

    this.setState((prevState) => ({
        ...prevState,
        data: data
      })
    )
  }

  defaultError(index) {
    const data = this.state.data;
    data[index].error = true;

    this.setState((prevState) => ({
      ...prevState,
      data: data
    })
  )
  }

  toggleStage(index) {
    const data = this.state.data;
    data[index].stage = this.state.data[index].stage === 1 ? 2 : 1;

    this.setState((prevState) => ({
      ...prevState,
      data: data
    }))
  }
  
  doLive(index) {
    alert(`Live ${this.state.data[index].type} warning sent!`);
    const data = this.state.data;
    data[index].active = {
      live: true,
      test: false
    };

    this.setState((prevState) => ({
      ...prevState,
      data: data
    }))
  }

  doTest(index) {
    alert('Test alert. Carry on, nothing to see here.');

    const data = this.state.data;
    data[index].active = {
      live: false,
      test: true
    };

    this.setState((prevState) => ({
      ...prevState,
      data: data
    }))
  }

  indexReset(index) {
    const data = this.state.data;
    data[index] = {
      type: data[index].type,
      value: '',
      error: false,
      stage: 1,
      active: {
        test: false,
        live: false
      }
    }
    this.setState((prevState) => ({
      ...prevState,
      data: data
    }))
  }

  render() {
    return (
      <div className="App">
        <header role="banner">
          <PageHeader
            bsClass="text-center"
          >
            Rungway Anything Warning System
          </PageHeader>
        </header>
        <main role="main">
          <Grid>
                {
                  this.state.data.map((d, index) => (
                  <Row key={uuid.v4()}>
                    <Col xs={12}>
                      <WarningForm
                        data={d}
                        index={index}
                        handleSubmit={this.handleSubmit}
                        handleOptionChange={this.handleOptionChange}
                        defaultError={this.defaultError}
                        toggleState={this.toggleStage}
                        doLive={this.doLive}
                        indexReset={this.indexReset} />
                      </Col>
                  </Row>
                  ))
                }
          </Grid>
        </main>
      </div>
    );
  }
}

export default App;

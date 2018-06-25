import React, { Component } from 'react';

import { Col, Grid, Row, PageHeader } from 'react-bootstrap';

import WarningForm from './WarningForm';
import LiveWarningConfirm from './LiveWarningConfirm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader
          bsClass="text-center"
        >
          Rungway Missile Warning System
        </PageHeader>
        <Grid>
          <Row>
            <Col xs={12}>
              <WarningForm />
            </Col>
          </Row>
        </Grid>

        <LiveWarningConfirm />
      </div>
    );
  }
}

export default App;

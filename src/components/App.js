import React, { Component } from 'react';

import { Col, Grid, Row, PageHeader } from 'react-bootstrap';

import WarningForm from './WarningForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header role="banner">
          <PageHeader
            bsClass="text-center"
          >
            Rungway Missile Warning System
          </PageHeader>
        </header>
        <main role="main">
          <Grid>
            <Row>
              <Col xs={12}>
                <WarningForm />
              </Col>
            </Row>
          </Grid>
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import { Col, Grid, Row, PageHeader } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader>Rungway Missile Warning System</PageHeader>
        <Grid>
          <Row>
            <Col xs={12}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

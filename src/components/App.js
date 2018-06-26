import React, { Component } from 'react';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';
import LiveWarningConfirm from './LiveWarningConfirm';
import './styles/App.css';
import WarningForm from './WarningForm';
import Alert from '../components/Alert';

class App extends Component {
  state = {
    pendingLiveWarning: null,
    alerts: [],
  };

  onSubmitWarning = (warning) => {
    if (warning.type === 'live'){
      // present user with a Warning Confirmation dialog
      this.setState({pendingLiveWarning: warning});
    }
    else{
      this.addWarning(warning);
    }
  }

  addWarning = (warning) => {
    const alerts = this.state.alerts;
    alerts.unshift(warning);
    this.setState({alerts})
  }

  onConfirmLiveWarning = () => {
    this.addWarning(this.state.pendingLiveWarning);
    this.setState({pendingLiveWarning: null});
  }

  onAbortWarning = () => {
    this.setState({pendingLiveWarning: null});
  }

  onDismissAlert = (id) => {
    // Find alert by their id and remove from list 
    const alerts = this.state.alerts;
    const index = alerts.findIndex((item) => item.id === id);
    alerts.splice(index, 1);

    this.setState({ alerts });
  }

  render() {
    const { alerts, pendingLiveWarning } = this.state;

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
              <WarningForm onSubmitWarning = {this.onSubmitWarning} />
            </Col>
          </Row>

          {/* List of recent open warnings */}
          <Row>
            <Col xs={10} xsPush={1}>
              <div className='warning-list'>
                { alerts.map( (alert)=> {
                  return <Alert alert={alert} onClose={this.onDismissAlert} key={alert.id}/>
                })}
              </div>
            </Col>
          </Row>

          {/* Live warning confirmation panel */}
          {pendingLiveWarning !== null &&
            <LiveWarningConfirm
              onConfirmLiveWarning={this.onConfirmLiveWarning} 
              onAbortWarning={this.onAbortWarning}
            />
          }
        </Grid>
      </div>
    );
  }
}

export default App;

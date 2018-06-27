import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, Grid, Row, Glyphicon } from 'react-bootstrap';
import './styles/LiveWarningConfirm.css';

class LiveWarningConfirm extends React.Component {  
    state = {
      countdown:4,
      timer: null,
    };

    static propTypes = {
      onConfirmLiveWarning: PropTypes.func.isRequired,
      onAbortWarning: PropTypes.func.isRequired,
    };

    componentDidMount = () => {
      const timer = setInterval(this.updateCountDown, 1000);
      this.setState({timer});
    }

    componentWillUnmount = () => {
      clearInterval(this.state.timer);
    }

    updateCountDown = () => {
      this.setState( (prevState) => ({countdown: prevState.countdown - 1 }) );
      
      if (this.state.countdown === 0){
        clearInterval(this.state.timer);
        setTimeout(this.confirmLiveMissileAlert, 1350);
      }
    }

    confirmLiveMissileAlert = () => {
      this.props.onConfirmLiveWarning();
    }

    getCountDownStyle = () => {
      let res = 'countdown '
      if (this.state.countdown < 3) res += 'countdown-danger ';
      if (this.state.countdown === 0) res += 'countdown-over ';
      return res; 
    } 

    render() {
      const { countdown } = this.state;
      const countDownStyle = this.getCountDownStyle();
      const optionsStyle = countdown === 0 ? 'fadeOut' : '';

      return (
        <div className="backdrop">
          <div className="confirm-panel">
              <Grid>
                <Row>
                  <Col xs={12} className='text-center'>
                    <h2>Live Missile Warning to be sent in...</h2>
                  </Col>
     
                  <Col xs={12} className='text-center'>
                    <h1 className={countDownStyle}>
                      {countdown}
                    </h1>
                  </Col>
        
                  {/* Give options for confirming or aborting while countdown */}
                  <div className={optionsStyle}>
                    <Col xs={12} className='text-center'>
                      <Button 
                        id='abort-btn'
                        bsStyle='danger'
                        bsSize='large'
                        disabled={countdown === 0}
                        onClick={this.props.onAbortWarning}
                        >
                          Abort  <Glyphicon glyph='remove-circle'/>
                      </Button>
                    </Col>
                
                    <Col xs={12} className='text-center'>
                      <Button
                        id='send-btn'
                        bsStyle='success'
                        bsSize='large'
                        disabled={countdown === 0}
                        onClick={this.confirmLiveMissileAlert}
                        >
                        Send Now <Glyphicon glyph='fire'/>
                      </Button>
                    </Col>
                  </div>
                </Row>
              </Grid>
          </div>
        </div>
      );
  }
}

export default LiveWarningConfirm;
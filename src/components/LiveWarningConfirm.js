import React, { Fragment } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import './styles/LiveWarningConfirm.css';

class LiveWarningConfirm extends React.Component {  
    state = {
      countdown:5,
      timer: null,
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
        
        this.sendLiveMissileAlert();
      }
    }

    sendLiveMissileAlert = () => {
      //...
    }

    getCountDownStyle = () => {
      let res = 'countdown '
      if (this.state.countdown < 3) res += 'countdown-danger ';
      if (this.state.countdown === 0) res += 'countdown-over';
      return res; 
    } 

    render() {
      const { countdown } = this.state;
      const countDownStyle = this.getCountDownStyle();

      return (
        <div className="backdrop">
          <div className="confirm-panel">
              <Grid>
                <Row>
                  <Col xs={12} className='text-center'>
                    <h2>Live Missile Warning to be sent in...</h2>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} className='text-center'>
                    <h1 className={countDownStyle}>
                      {countdown}
                    </h1>
                  </Col>
                </Row>

                {/* Give options for confirming or aborting while countdown */}
                {countdown !== 0 &&
                  <Fragment>
                    <Row>
                      <Col xs={12} className='text-center'>
                        <button>
                          Send Now
                        </button>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12} className='text-center'>
                        <button>
                          Abort
                        </button>
                      </Col>
                    </Row>
                  </Fragment>
                }
              </Grid>
          </div>
        </div>
      );
  }
}

export default LiveWarningConfirm;
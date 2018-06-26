import PropTypes from 'prop-types';
import React from 'react';
import './styles/Alert.css';

const Alert = (props) => {
  const { alert } = props; 
  let alertStyle;

  switch (alert.type){
    case 'live': alertStyle =  { icon: 'fas fa-bomb', style: 'live-alert' }; break;
    case 'test': alertStyle = { icon: 'far fa-clipboard', style: 'test-alert'}; break;
    default: alertStyle =  { icon: 'fas fa-gift', style: 'promo-alert' };
  }

  return (  
    <div className={'missile-alert '+alertStyle.style} >
      <span>
        <i className={alertStyle.icon}/>
        <span id='message'>{alert.message}</span>
      </span>
      
      <i className="fas fa-times fa-xs close-btn"
         title='Dismiss alert'
         onClick={() => props.onClose(alert.id)}/>
    </div>
  );
}

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string.isRequired,
    message:PropTypes.string.isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
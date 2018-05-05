import React from 'react';
import './Info.css';

class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="info-container">
        <div className="info-wrapper">
          <div className="info-column-l">
            <li>Subtotal</li>
            <li>Pickup savings</li>
            <li>Est. taxes & fees <br/>(Based on 94085)</li>
          </div>
          <div className="info-column-r">
            <li><b>{this.props.subtotal}</b></li>
            <li style={{"color":"red"}}><b>{this.props.savings}</b></li>
            <li><b>{this.props.taxes}</b></li>
          </div>
        </div>
        <p>---------------------</p>
        <div className="total-wrapper">
          <div className="EST-total">
            <p><b>Est. Total</b></p>
          </div>
          <div className="EST-total-amount">
            <p><b>{this.props.total}</b>
            </p>
          </div>
        </div>



      </div>
    )
  }
}

export default Info;

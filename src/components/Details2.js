import React from 'react';
import './Details2.css';

class Details2 extends React.Component {
  render() {
    return (
      <div className="container">
        <img alt="stockPhoto"
             src={this.props.url}/>
        <div className="d2-rhs">
          <p>{this.props.description}</p>
          <div className="pq">
            <p className="price"> <b>{this.props.price}</b></p>
            <p className="qty">    Qty:1</p>
          </div>
          <p className="oldPrice">{this.props.oldPrice}</p>
        </div>

      </div>
    )
  }
}

export default Details2;
